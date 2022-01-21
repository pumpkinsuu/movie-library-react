import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";

import theme from "./parts/theme";
import Header from "./parts/header";
import Content from "./parts/content";
import Footer from "./parts/footer";
import Box from "@mui/material/Box";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
        className="bg-main"
      >
        <Header />
        <Content/>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
