import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Georgia',
        ],
    },  
    palette: {
        primary: {
            main: '#36454F', // Replace with your primary color
        },
        secondary: {
            main: '#590B0B', // Replace with your secondary color
        },
    },
});
export default theme;

