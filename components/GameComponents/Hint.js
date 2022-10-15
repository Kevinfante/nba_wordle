import { Typography } from '@mui/material/'

export default function Hint({ player }) {

  let editedString = player.split(" ")
  editedString = editedString[0][0].padEnd(editedString[0].length, "*") + " " + editedString[1][0].padEnd(editedString[1].length, "*")

  return (
    <Typography
      sx={{
        mb: "-1%",
        color: "#eee8d5"
      }}
      fontStyle="bold">
      {editedString}
    </Typography>
  )
}