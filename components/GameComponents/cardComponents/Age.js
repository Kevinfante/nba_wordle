import {Box} from '@mui/material/'


export default function Age ({ bday, sel }){
  const years = (birth) => {
    let yob = new Date(birth);
    let today = new Date();

    // get the days and the years
    let todMonth = today.getMonth();
    let todDay = today.getDay();
    let mob = yob.getMonth();
    let dob = yob.getDay();

    // reset values to years
    yob = yob.getFullYear();
    today = today.getFullYear();

    if(mob > todMonth){
      return (today - yob - 1)
    } else if (mob < todMonth){
      return (today - yob)
    } else if (dob <= todDay){
      return (today - yob)
    } else {
      return (today - yob - 1)
    }
  }

  let age = years(bday)
  let selAge = years(sel)

  let diff = ""

  if(selAge < age){
    diff = "▼"
  } else if (selAge > age){
    diff = "▲"
  }

  let color = selAge === age ? '#859900' : '#8a919c'

  return(
    <Box
    id ="age-Container"
    sx={{
      display: 'flex',
      justifyContent: "center",
      bgcolor : color,
      alignItems: 'center',
      borderRadius: "50%",
      height:"85%",
      width:"13.7%",
      color: "white",
      fontWeight:"bold",
      fontSize:"120%"}}>
      {`${age}${diff}`}
    </Box>
  )
}