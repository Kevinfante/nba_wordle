import  { Typography, Card, CardMedia, Avatar, CardContent, Stack, Button, Box} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Answer from './Answer.js'
import { useState } from 'react'
export default function Fail({ player, name }) {

  const [reveal, setReveal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setReveal(!reveal)
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
    <Stack direction="column" sx={{alignItems:'center'}}>
      <Box>
        <Typography variant = 'h4' align="center">
          {`You've reached the attempt limit`}
        </Typography>
      </Box>
      <Box>
        <ThemeProvider theme={theme}>
          {!reveal ? <Button variant ="outlined" onClick = {handleClick} > Reveal Player</Button>: <Answer player = { player } name = {name} />}
        </ThemeProvider>
      </Box>
      <Box>
        <Typography sx={{ pt: 1.5, mb:0, pb:0 }} color="#fdf6e3">
          click anywhere to try again!
        </Typography>
      </Box>

    </Stack>
  )
}