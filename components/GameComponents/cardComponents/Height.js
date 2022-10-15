import {Box} from '@mui/material/'

export default function Height ({ height, sel }){

  const getHeightDiff = (h,s) => {
    let hArr = h.split("-")
    let sArr = s.split("-")
    hArr = Number(hArr[0]) + (Number(hArr[1])/12)
    sArr = Number(sArr[0]) + (Number(sArr[1])/12)
    return (hArr - sArr)
  }

  let diff = ""
  let heightDiff = getHeightDiff(height, sel)

  if(heightDiff > 0){
    diff = "▼"
  } else if (heightDiff < 0){
    diff = "▲"
  }

  let color = height === sel ? '#859900' : '#8a919c'
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
      {`${height}${diff}`}
    </Box>
  )
}
{/* <Box id="team-container"
sx={{
  display: 'flex',
  justifyContent: "center",
  bgcolor : color,
  alignItems: 'center',
  borderRadius: "50%",
  height:"85%",
  width:"16.67%"}}>
  height
</Box> */}