import { styled } from '@mui/material'
import type { ReactNode } from 'react'

const Root = styled('div')`
  background: #f8f5e6;
  padding: 30px;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`

const PageCorner = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.05) 50%);
  border-radius: 0 0 0 10px;
  z-index: 3;
`

interface Props {
  children: ReactNode
}

function NotePaper({ children }: Props) {
  return (
    <Root>
      {children}
      <PageCorner />
    </Root>
  )
}

export default NotePaper
