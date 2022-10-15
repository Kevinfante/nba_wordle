import {Box} from '@mui/material/'


export default function Position ({ pos, sel }){

  let color = pos === sel ? '#859900' : '#8a919c'

  return(
    <Box
    id ="age-Container"
    font-S
    sx={{
      display: 'flex',
      justifyContent: "center",
      bgcolor : color,
      alignItems: 'center',
      borderRadius: "50%",
      height:"85%",
      width:"13.7%",
      color: "white",
      fontWeight:"bold",
      fontSize:"120%"}}>
      {`${pos}`}
    </Box>
  )
}