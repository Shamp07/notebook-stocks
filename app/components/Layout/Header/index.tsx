import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import { Icon, styled } from '@mui/material'
import { css } from '@mui/material/styles'

import StockIcon from '~/assets/icons/stock.svg?react'
import route from '~/constants/route'
import { generateDisplayStyle } from '~/utils/style'
import { fontFamily } from '~/constants/font'
import Drawer from '~/components/Layout/Header/Drawer'

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
  margin-right: 24px;
  font-family: ${fontFamily.singleday};
  
  &:hover {
    color: black;
  }
  
  ${({ theme }) => css`
    ${theme.breakpoints.down('md')} {
      margin-right: auto;
      font-size: 1.2rem;
    }
  `}
`

const MenuBox = styled(Box)`
  ${({ theme }) => generateDisplayStyle(theme, 'down', 'md')}

  & .MuiTouchRipple-root, & .MuiTouchRipple-child {
    border-radius: 6px;
  }
`

const PageBox = styled(Box)`
  display: flex;
  gap: 24px;
  
  ${({ theme }) => generateDisplayStyle(theme, 'up', 'md')}
`

const TitleIcon = styled(StockIcon)`
  margin-right: 8px;
`

const PageLink = styled(NavLink)`
  margin: 8px 0;
  color: #2b2118cc;
  font-weight: 700;
  transition-property: all;
  transition-duration: .2s;
  
  &:hover {
    color: #2b2118;
  }
  
  &.active {
    color: #2b2118;
  }

  &.active > span {
    width: 100%;
    background: #2b2118;
  }
`

const UnderBar = styled('span')`
  display: block;
  width: 0;
  height: .125rem;
  transition-property: all;
  transition-duration: .2s;
`

const pages = [{
  name: '인기 주식',
  path: route.popular,
}, {
  name: '포트폴리오',
  path: route.portfolio,
}, {
  name: '랭킹',
  path: route.ranking,
}]

function Header() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const pageLinks = pages.map(({ name, path }) => (
    <PageLink
      to={path}
      key={path}
    >
      <Typography
        variant="body2"
        fontWeight="medium"
      >
        {name}
      </Typography>
      <UnderBar />
    </PageLink>
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
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor="right"
              />
            </MenuBox>
          </InnerBox>
          <PageBox>
            {pageLinks}
          </PageBox>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
