import  { Typography, Avatar, Box } from '@mui/material/'
import Answer from './Answer.js'

export default function Success({ player, name }) {

  return (
    <Box>
      <Typography variant = 'h2' align="center">
        Congrats!
      </Typography>
      <Typography variant = 'h5' align = "center">
        You Guessed It!
      </Typography>
      <Answer player ={ player } name = { name }/>
      <Typography sx={{ pt: 1.5, mb:0, pb:0 }} color="fdf6e3">
        click anywhere to try again!
      </Typography>
    </Box>
  )
}