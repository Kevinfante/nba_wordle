import { Box, Typography } from "@mui/material/"
import Image from 'next/image'
import Go from '../components/Road.js'
import Head from 'next/head'

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
      <Head>
        <title>{`Who's that Baller?! | Rules`}</title>
        <link rel="shortcut icon" href="/myLogo.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
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
