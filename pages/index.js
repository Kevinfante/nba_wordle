import { Box, Button, Typography } from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'

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
            {`Who's that Baller!`}
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
          display="flex" direction="row"
          justifyContent="space-evenly"
          width="75%"
          sx={{ mt: "-10%" }}>
          <Button variant="outlined" sx={buttons}>
            <Link href='/rules'>
              <Typography>Rules</Typography>
            </Link>
          </Button>
          <Button variant="outlined" sx={buttons} >
            <Link href='/game'>
              <Typography> Game </Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
