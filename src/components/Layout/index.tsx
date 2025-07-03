import Header from './Header'
import type { ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  )
}

export default Layout
