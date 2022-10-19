import { useState } from "react";
import Guess from '../components/GameComponents/Guess.js'
import Search from '../components/GameComponents/Search.js'
import Random from '../components/GameComponents/Random.js'
import Success from '../components/Success.js'
import Fail from '../components/Fail.js'
import Go from '../components/Road.js'
import {Modal, Box, Typography} from '@mui/material/'
import Head from 'next/head'

export default function Games(props) {
  const players = props

  const [selected, setSelected] = useState(null)

  const [guessed, setGuessed] = useState([])
  const [gameState, setGameState] = useState(false)
  const [win, setWin] = useState(false)

  const handleClose = () => {
    setGuessed([])
    setSelected(null)
    setGameState(false)
    setWin(false)
  }

  // modal styling
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#073642',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:"#eee8d5"
  };

  const rootStyle = {
    bgcolor: "#002b36",
    height: "100vh",
    width: "100vw"
  }


  return !selected ? < Random players = {props.names} setSelected = {setSelected}/> : (
    <Box id="game" sx={rootStyle}>
      <Head>
        <title>{`Who's that Baller?! | Game`}</title>
        <link rel="shortcut icon" href="/myLogo.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Search players = {players.names} setGuessed = {setGuessed} guessed = {guessed} selected = {selected} setGameState = {setGameState} setWin = {setWin} />
      {guessed.length ? <Guess guessed = {guessed} players={ players } selected = { selected }/> : null}
      <Modal
      open = {gameState}
      onClose = {handleClose}
      >
        <Box sx = {style}>
          {win ? <Success player = {players[selected]}  name = {selected}/> : <Fail player ={players[selected]} name = {selected}/>}
        </Box>
      </Modal>
      <Go />
    </Box>
  )
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filepath = path.join(process.cwd(),
  'data.json');
  const jsonData = await
  fsPromises.readFile(filepath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}