import { type MouseEvent, useState } from 'react'
import { Link } from 'react-router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Icon, styled } from '@mui/material'
import { css } from '@mui/material/styles'

import StockIcon from '~/assets/icons/stock.svg?react'
import route from '~/constants/route'
import { generateDisplayStyle } from '~/utils/style'
import NoteMenu from '~/components/NoteMenu'

const InnerBox = styled(Box)`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      flex-grow: 1;
    }
  `}
`

const Title = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  margin-right: 16px;
  
  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      margin-right: auto;
      font-size: 1.2rem;
    }
  `}
`

const MenuBox = styled(Box)`
  ${({ theme }) => generateDisplayStyle(theme, 'down', 'md')}
`

const PageBox = styled(Box)`
  ${({ theme }) => generateDisplayStyle(theme, 'up', 'md')}
`

const TitleIcon = styled(StockIcon)`
  margin-right: 8px;
`

const PageButton = styled(Button)`
  margin: 8px 0;
  color: #2B2118;
  display: block;
`

const pages = ['🔥 인기 주식', '📓 내 공책']

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const pageButtons = pages.map(page => (
    <PageButton
      key={page}
      size="large"
      onClick={handleCloseNavMenu}
    >
      {page}
    </PageButton>
  ))

  const menuItems = pages.map(page => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Typography variant="body1">{page}</Typography>
    </MenuItem>
  ))

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InnerBox>
            <Title to={route.home}>
              <Icon
                fontSize="large"
                component={TitleIcon}
              />
              공책 주식
            </Title>
            <MenuBox>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <NoteMenu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {menuItems}
              </NoteMenu>
            </MenuBox>
          </InnerBox>
          <PageBox>
            {pageButtons}
          </PageBox>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
