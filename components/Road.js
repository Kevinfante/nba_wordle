import { Box, Button, Typography } from "@mui/material/"
import Link from 'next/link'

export default function Go() {

  return (
    <Box id="home-Button"
      sx={{
        position: 'absolute',
        top: "0px",
        left: "0px"
      }}>
      <Link href="/">
        <Button>
          <Typography color="#eee8d5" variant="h3">
            ⌂
          </Typography>
        </Button>
      </Link>
    </Box>
  )

}
