import { useState } from 'react';
import {
  TextField,
  Stack,
  Autocomplete,
  Button
} from '@mui/material/';
import { styled } from '@mui/material/styles'
import Error from './Error.js'
import Hint from './Hint.js'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    transform: "translate(34px, 20px) scale(1);",
    color: "#b8b3a3"
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "#eee8d5",

    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 6
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eee8d5"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fdf6e3"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eee8d5"
    }
  }
});


export default function Search({ players, setGuessed, guessed, selected, setGameState, setWin }) {
  // const searchVal = useRef(null)
  const [guess, setGuess] = useState("")
  const [error, setError] = useState(false)
  const [hint, setHint] = useState(false)

  const handleSearch = (e, value) => {
    e.preventDefault()
    setGuess(value)
  }


  const handleHint = (e) => {
    e.preventDefault()
    setHint(true)
  }

  let text = guessed.length === 8 ? 'Concede Defeat' : `Guess! ${guessed.length + 1} / 8`

  const handleClick = (e) => {
    e.preventDefault();

    if (guess === "" || guess === null) {
      return
    }

    if (guessed.length === 8) {
      setGameState(true)
      return
    }

    if (guess === selected) {
      setGameState(true)
      setWin(true)
      return
    }

    if (guessed.includes(guess)) {
      setError(true)
    } else {
      let temp = [guess].concat(guessed)
      setGuessed(temp)
      setError(false)
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#eee8d5',
      },
      secondary: {
        main: '#fdf6e3'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ p: `10%` }} >
        <StyledAutocomplete
          sx={{ color: "#eee8d5" }}
          onChange={handleSearch}
          id="SearchBar"
          options={players.map((player) => player)}
          renderInput={(params) => <TextField
            {...params}
            id="textArea"
            label="Select a Player"
            InputLabelProps={{
              style: { color: '#eee8d5' }
            }}

            sx={{ color: "#eee8d5" }} />}
        />
        {error ? <Error /> : null}
        <Button
          sx={{
            mx: '40%',
            mt: `1%`
          }}
          variant="outlined"
          onClick={handleClick}>
          {text}
        </Button>
        {(guessed.length >= 5 && !hint && guessed.length < 8) ? <Button sx={{ mx: '40%', mt: `1%` }} variant="outlined" onClick={handleHint}>Hint?</Button> : null}
        {(hint && guessed.length < 8) ? <Hint player={selected} /> : null}
      </Stack>
    </ThemeProvider>

  )


}

