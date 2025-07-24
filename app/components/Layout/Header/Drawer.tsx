import Box from '@mui/material/Box'
import RawDrawer from '@mui/material/Drawer'
import { type DrawerProps, styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router'

import { generateDisplayStyle } from '~/utils/style'
import route from '~/constants/route'

const Drawer = styled(RawDrawer)`
  color: inherit;
  ${({ theme }) => generateDisplayStyle(theme, 'down', 'md')}
`

const DrawerHeader = styled(Box)`
  width: 250px;
  padding: 0 16px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  font-size: 1.125rem;
  
  & .MuiTouchRipple-root, & .MuiTouchRipple-child {
    border-radius: 6px;
  }
`

const DrawerList = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const DrawerLink = styled(Link)`
  display: flex;
  padding: .75rem .5rem;
  font-size: 1.125rem;
  font-weight: 500;
`

const links = [{
  title: '홈',
  path: route.home,
}, {
  title: '인기 주식',
  path: route.popular,
}, {
  title: '포트폴리오',
  path: route.portfolio,
}, {
  title: '랭킹',
  path: route.ranking,
}]

interface Props extends DrawerProps {
  onClose: () => void
}

function NoteDrawer(props: Props) {
  const { onClose } = props

  const pageLinks = links.map(({ title, path }) => (
    <DrawerLink to={path} onClick={onClose}>
      {title}
    </DrawerLink>
  ))

  const drawerList = (
    <Box>
      <DrawerHeader>
        <Typography variant="h6">
          메뉴
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerList>
        {pageLinks}
      </DrawerList>
    </Box>
  )

  return (
    <Drawer {...props}>
      {drawerList}
    </Drawer>
  )
}

export default NoteDrawer
