import type { ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import RawContainer from '@mui/material/Container'
import { css } from '@mui/material/styles'
import { Global } from '@emotion/react'

import Header from './Header'
import { styled } from '@mui/material'

const globalStyles = css`
  body {
    background-image: url("../../../public/textured-paper.jpg");
    color: #2e3032;
    font-feature-settings: "ss05"
  }
`

const Container = styled(RawContainer)`
  padding: 24px 0;
`

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <Global styles={globalStyles} />
      <Header />
      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  )
}

export default Layout
