import { Box, Button, Typography } from "@mui/material/"
import Link from 'next/link'

export default function Go() {

  return (
    <Box id="home-Button" s
      sx={{
        position: 'absolute',
        top: "0px",
        left: "0px"
      }}>
      <Button>
        <Link href="/">
          <Typography color="#eee8d5" variant="h3">
            ⌂
          </Typography>
        </Link>
      </Button>
    </Box>
  )

}
