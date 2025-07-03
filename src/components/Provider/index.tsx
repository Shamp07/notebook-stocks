import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Provider
