import Menu from '@mui/material/Menu'
import { css, styled } from '@mui/material'
import type { ReactNode } from 'react'

import { generateDisplayStyle } from '~/utils/style'
import type { MenuProps } from '@mui/material'

const Root = styled(Menu)`
  ${({ theme }) => css`
    ${generateDisplayStyle(theme, 'down', 'md')}
    & .MuiList-root {
      background: 
        linear-gradient(
            90deg,
            transparent 0%, transparent 6%, 
            #f5c492 6%, 
            #f5c492 calc(6% + 2px),
            transparent calc(6% + 2px), 
            transparent calc(6% + 6px), 
            #f5c492 calc(6% + 6px), 
            #f5c492 calc(6% + 8px), 
            transparent calc(6% + 8px), 
            transparent 100%
        ),
        linear-gradient(#fbee9f, #fbee9f);
      
        
      & > .MuiMenuItem-root {
        border-top: 2px solid #c9d798;
        padding-left: 20px;
        
        &:last-of-type {
          border-bottom: 2px solid #c9d798;  
        }
      }
    }
  `}
`

interface Props extends MenuProps {
  children: ReactNode
}

function NoteMenu({ children, ...props }: Props) {
  return (
    <Root {...props}>
      {children}
    </Root>
  )
}

export default NoteMenu
