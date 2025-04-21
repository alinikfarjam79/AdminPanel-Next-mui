// darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#494949',
        },
        secondary: {
            main: '#7000ff',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
            item: '#e0bbf9'

        },
        action: {
            active: '#fff',
            hover: '#494949',
            selected: '#494949',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
        boxShadowColor: 'rgba(0, 0, 0, 0.35)'

    },
});

export default darkTheme;
