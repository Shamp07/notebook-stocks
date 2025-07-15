import { css, type Theme } from '@mui/material/styles'
import type { Breakpoint } from '@mui/material'

function generateDisplayStyle(theme: Theme, condition: 'down' | 'up', key: Breakpoint | number) {
  return css`
    display: none;
    ${theme.breakpoints[condition](key)} {
      display: flex;
    }
  `
}

export {
  generateDisplayStyle,
}
