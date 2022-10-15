import { Stack, Box } from '@mui/material/'
import Gard from './Card.js'
import Guide from './Guide.js'

export default function Guess({ guessed, players, selected }) {
  let key = 0;

  const box = {
    mt: "-5%",
    bgcolor: "#002b36"
  }

  return (
    <Box sx={box}>
      <Stack direction='column' alignItems="center">
        <Guide />
        {guessed.map((guess) => <Gard guess={guess} players={players} selected={selected} key={key++} />)}
      </Stack>
    </Box>
  )
}