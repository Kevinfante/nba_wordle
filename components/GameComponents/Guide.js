import { Stack, Box, Paper, Typography } from "@mui/material/"

export default function Guide({ }) {

  return (
    <Paper id="guide card"
      sx={{
        bgcolor: "#073642",
        display: 'flex',
        direction: 'column',
        width: "75%",
        alignItems: "center",
        maxWidth: "700px",
        minWidth: "300px",
        color: "#eee8d5",
      }}>
      <Stack width="100%" id="guideStack" direction="row" justifyContent="space-evenly">
        <Box width="16.67%">
          <Typography align="center" overflow="hidden">
            Player
          </Typography>
        </Box>
        <Box width="13.7%">
          <Typography align="center" overflow="hidden">
            Team
          </Typography>
        </Box>
        <Box width="13.7%">
          <Typography align="center" overflow="hidden">
            Age
          </Typography>
        </Box>
        <Box width="13.7%">
          <Typography align="center" overflow="hidden">
            Height
          </Typography>
        </Box>
        <Box width="13.7%">
          <Typography align="center" overflow="hidden">
            Position
          </Typography>
        </Box>
        <Box width="13.7%">
          <Typography align="center" overflow="hidden">
            Years of Exp
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}