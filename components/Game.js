import { useState } from "react";
import MatchBox from './Game_Components/MatchBox.js'
import Guess from './Game_Components/Guess.js'

export default function Games({ players }) {
  const [matches, setMatches] = useState([])
  const [guesses, setGuesses] = useState([])

  const handleInput = (e) => {
    e.preventDefault()
    //getMatches to current text input
    let matchList = players.names.filter(player => {
      // look for values that start with the target value
      // gi to ignore capitalizaiton
      // still run into issues wiht players like 'D'Angelo russel'
        // maybe more can be added to the regexp to solve that
      // typo's not handled
      const regex = new RegExp(`^${e.target.value}`,"gi");
      return player.match(regex)
    })
    matchList = e.target.value === "" ? [] : matchList
    setMatches(matchList)
  }

  return (
    <div id="game">
      <div id = "searchbar">
        <input
        type = "text"
        id = "search"
        placeholder = "Search a player..."
        onChange = {handleInput} />
        {(matches.length) ?
       <MatchBox matches = {matches} setGuesses = {setGuesses}/> :
        null}
      </div>
      {guesses.length ? <Guess guesses = {guesses} /> : null}
    </div>
  )
}