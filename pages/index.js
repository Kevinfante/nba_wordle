import { Box, Button, Typography } from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home(props) {

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

  const buttons = {
    height: "200%",
    width: "350px"
  }

  return (
    <ThemeProvider theme={theme}>
      <Box id='homebody'
        display="flex"
        sx={{
          height: "100vh",
          width: "100vw",
          bgcolor: "#002b36",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}>
        <Box>
          <Typography
            variant="h1"
            sx={{ color: '#eee8d5' }}
            align="center">
            {`Who's that Baller?!`}
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: '#eee8d5' }}
            align="center">
            {`A wordle-inspired NBA guessing game!`}
          </Typography>
        </Box>
        <Box
          id="button container"
          display="flex"
          direction="row"
          justifyContent="space-evenly"
          width="75%"
          sx={{ mt: "-10%" }}>
          <Link href='/rules'>
            <Button variant="outlined" sx={buttons}>
              <Typography>Rules</Typography>
            </Button>
          </Link>
          <Link href='/game'>
            <Button variant="outlined" sx={buttons} >
              <Typography> Game </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
