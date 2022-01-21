import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundImage: "linear-gradient(to bottom, rgba(29, 67, 80, 0.5), rgba(164, 57, 49, 0.5))",
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundImage: "linear-gradient(to right, rgba(29, 67, 80, 0.5), rgba(164, 57, 49, 0.5))",
                }
            }
        }
    },
});

export default theme;