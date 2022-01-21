import React from "react";
import {AppBar, Toolbar, Box, Button} from "@mui/material";


import SearchBar from "./searchBar";
import MenuButton from "./menuButton";


export default function Header() {
  return (
    <AppBar
      component="header"
      position="sticky"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button className="logo">
            Movie Library
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '50%' }}
        >
          <SearchBar />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <MenuButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}