import { createTheme } from '@mui/material'
import { fontFamily } from '~/constants/font'

const theme = createTheme({
  palette: {
    primary: {
      main: '#D0CEC1',
      contrastText: '#2B2118',
    },
  },
  typography: {
    fontFamily: [
      fontFamily.pretendard,
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
