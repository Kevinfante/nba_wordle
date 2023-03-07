const fs = require('fs')
const fsp = require('node:fs/promises')
const { Cluster } = require('puppeteer-cluster');

// new starting object strigified
let startingObj = JSON.stringify({})
// startingObj = JSON.stringify(startingObj);

// write file
fs.writeFile('./players.json', startingObj, (err) => {
  if (err) console.log('file not created: ', err)
  console.log('file created!')
});

// fsp.writeFile('./players.json', startingObj)
// .then(() => console.log('file created'))
// .catch(() => console.log('file not created'))

// update usign cluster.js
const teams = [
  "BOS", "MIL", "PHI", "CLE", "BRK",
  "MIA", "NYK", "ATL", "CHI", "TOR",
  "WAS", "IND", "ORL", "CHO", "DET",
  "DEN", "MEM", "SAC", "DAL", "PHO",
  "LAC", "NOP", "MIN", "GSW", "POR",
  "UTA", "OKC", "LAL", "SAS", "HOU"
];

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 1,
    puppeteerOptions: {
      headless: false,
      defaultViewport: false
    }
  });

  cluster.on('taskerror', (err, data) => {
    console.log(`error crawling ${data}: ${err.message}`)
  });

  await cluster.task(async ({ page, data: url }) => {
    let currTeam = url.slice(43, 46)
    await page.goto(url);
    // let currTeam = url.substr(43, 46)
    // console.log('currTeam: ', currTeam)
    const grabRoster = await page.evaluate(({ currTeam }) => {
      // console.log('currTeam: ', currTeam)
      const result = {}
      const rows = document.querySelectorAll("#roster > tbody > tr")
      rows.forEach(row => {
        result[row.children[1].children[0].textContent] = {
          Name: row.children[1].children[0].textContent,
          Num: row.children[0].innerText,
          Pos: row.children[2].innerText,
          Ht: row.children[3].innerText,
          Wt: row.children[4].innerText,
          Bday: row.children[5].innerText,
          Exp: row.children[7].innerText,
          Link: row.children[1].children[0].getAttribute('href'),
          Team: currTeam
        }
      })
      return result
    }, { currTeam })

    fs.readFile('./players.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj = {
          ...obj,
          ...grabRoster
        } //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('./players.json', json, 'utf8', function (err) {
          if (err) throw err;
          console.log('done');
        });
      }
    });
  })

  teams.forEach(team => {
    cluster.queue(`https://www.basketball-reference.com/teams/${team}/2023.html`)
  })

  // await cluster.idle();
  // await cluster.close();

})();