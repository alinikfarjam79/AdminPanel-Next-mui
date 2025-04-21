// lightTheme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffeb3b',
        },
        secondary: {
            main: '#ff5722',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
            item: '#e0bbf9'
        },
        action: {
            active: '#000000',
            hover: '#f5f5f5',
            selected: '#b3b3b3',
        },
        text: {
            primary: '#000000',
            secondary: '#757575',
        },
        boxShadowColor: 'rgba(0, 0, 0, 0.35)'
    },
});

export default lightTheme;
