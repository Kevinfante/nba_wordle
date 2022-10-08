import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rules from '../components/Rules.js'
import Game from '../components/Game.js'

export default function Home(props) {

  const players = props
  const [selected, setSelected] = useState(null)

  return (
    <div>
      {!selected ?
      <Rules setSelected = {setSelected} players = {players}/> :
      <Game players = {players}/>}
    </div>
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