import { Box } from "@mui/material/"
import Image from 'next/image'


export default function Team ({ team, selTeam }){

  let color = team === selTeam ? '#859900' : '#8a919c'

  let pic = `/${team}.png`

  return(
      <Box id="team-container"
      sx={{
        display: 'flex',
        justifyContent: "center",
        bgcolor : color,
        alignItems: 'center',
        borderRadius: "50%",
        height:"85%",
        width:"13.7%"}}>
        <Image
        id={`${team}-image`}
        src = {pic}
        alt='team'
        height = "50%"
        width="50%"
        sx={{position:'relative'}}/>
      </Box>
  )
}
