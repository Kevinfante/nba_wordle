import { Card, CardContent, Avatar, Stack, Paper } from "@mui/material/"
import Age from './cardComponents/Age.js'
import Height from './cardComponents/Height.js'
import Position from './cardComponents/Position.js'
import Team from './cardComponents/Team.js'
import Yoe from './cardComponents/Yoe.js'

export default function Guess({ guess, players, selected }) {

  let image = players[guess] === "N/A" ?
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" :
    `https://www.basketball-reference.com/req/202106291/images/players${players[guess].Link.slice(10, players[guess].Link.length - 5)}.jpg`

  return (
    <Paper id="card"
      sx={{
        bgcolor: "#073642",
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-evenly',
        width: "75%",
        height: "90px",
        alignItems: "center",
        maxWidth: "700px",
        minWidth: "300px",
        my: "5px",
        px: "10px",
        color: "#eee8d5"
      }}>
      <Stack width="16.67%"
        sx={{
          alignItems: "center"
        }}>
        <Avatar
          alt={guess}
          src={image} />
        {guess}
      </Stack>
      <Team team={players[guess].Team} selTeam={players[selected].Team} />
      <Age bday={players[guess].Bday} sel={players[selected].Bday} />
      <Height height={players[guess].Ht} sel={players[selected].Ht} />
      <Position pos={players[guess].Pos} sel={players[selected].Pos} />
      <Yoe years={players[guess].Exp} sel={players[selected].Exp} />
    </Paper>
  )
}