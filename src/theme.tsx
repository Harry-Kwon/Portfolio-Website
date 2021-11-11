import { makeStyles } from "@mui/material";
import {blue, } from '@mui/material/colors'
import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
    palette: {
        primary: {
        main: '#141e55',
        },
        secondary: {
        main: '#fff',
        },
        text: {
            primary: '#ffffff',
            secondary: '#eeeeee'
        }
    },
});

export default theme