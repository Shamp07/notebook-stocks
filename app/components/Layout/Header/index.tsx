import { type MouseEvent, useState } from 'react'
import { Link } from 'react-router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Icon, styled } from '@mui/material'
import { css } from '@mui/material/styles'

import StockIcon from '~/assets/icons/stock.svg?react'

const TitleBox = styled(Box)`
  display: flex;
  align-items: center;
  
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      text-align: right;
    }
  `}
`

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      text-align: right;
    }
  `}
`

const TitleIcon = styled(StockIcon)`
  margin-right: 8px;
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TitleBox sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Icon
              fontSize="large"
              component={TitleIcon}
            />
            <Title to="/">
              공책 주식
            </Title>
          </TitleBox>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            공책 주식
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none', alignItems: 'center', justifyContent: 'space-between', width: '100%' } }}>
            <Box sx={{ display: { xs: 'flex', alignItems: 'center' } }}>
              <Icon
                fontSize="large"
                component={StockIcon}
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                공책 주식
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                size="large"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#2B2118', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
