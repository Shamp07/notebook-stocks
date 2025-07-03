import { createTheme } from '@mui/material'
import { fontFamily } from '@/constants/font.ts'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
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
