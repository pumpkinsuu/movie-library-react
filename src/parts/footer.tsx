import {Box, Link, Typography} from "@mui/material";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
      }}
      className="bg-footer"
    >
      <Typography variant="body1" align="center">
        My sticky footer can be found here.
      </Typography>
      <Copyright />
    </Box>
  )
}