import { Box, Typography } from "@mui/material/"
import Image from 'next/image'
import Go from '../components/Road.js'


export default function Rules() {

  return (
    <Box id="Rules-container "
      sx={{
        display: 'flex',
        justifyContent: "center",
        bgcolor: '#002b36',
        alignItems: 'center',
        height: "100vh",
        width: "100vw"
      }}>
      <Image
        id={`rules img`}
        src="/Rules.webp"
        alt='team'
        height="100%"
        width="100%"
        sx={{ position: 'relative' }} />
      <Typography align="center" color="#eee8d5">
        This section is currently under construction
      </Typography>
      <Go />
    </Box>
  )
}
