import { Button, Box, Typography } from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Go from '../Road.js'


export default function Random({ players, setSelected }) {

  const handleClick = (e) => {
    e.preventDefault()
    let randomIdx = Math.floor(Math.random() * players.length)
    setSelected(players[randomIdx])
  }

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


  const rootStyle = {
    bgcolor: "#002b36",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <Box id="random"
      display="flex"
      sx={rootStyle}>
      <Typography
        variant="h2"
        sx={{ color: '#eee8d5' }}
        align="center">
        Generate a Random Player!
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{
            my: "20px",
            height: "10%",
            width: "25%"
          }}
        >
          Generate
        </Button>
      </ThemeProvider>
      <Go />
    </Box>
  )
}