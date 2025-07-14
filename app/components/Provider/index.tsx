import { ThemeProvider } from '@mui/material'
import type { ReactNode } from 'react'

import theme from '~/theme'

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
