import { Card, Box, CardMedia, Avatar, Typography } from '@mui/material/'

export default function Answer({ player, name }) {

  const card = {
    bgcolor: "#586e75",
    color: "#eee8d5",
    width: "300px",
    minWidth: "100%"
  }

  return (
    <Card sx={card}>
      <CardMedia
        component="img"
        height="200"
        image={`https://www.basketball-reference.com/req/202106291/images/players${player.Link.slice(10, player.Link.length - 5)}.jpg`}
        alt='player image'
        sx={{ objectFit: 'contain', pt: "10%" }} />
      <Box display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          p: '5px',
          py: "10px"
        }}
      >
        <Avatar alt={player.Team} src={`/${player.Team}.png`} />
        <Typography sx={{ fontWeight: "bold" }} gutterBottom={false} varaint="h5" >
          {name}
        </Typography>
      </Box>
    </Card>
  )
}