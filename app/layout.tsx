import { Outlet } from 'react-router'
import AppLayout from '~/components/Layout'
import Provider from '~/components/Provider'

function Layout() {
  return (
    <Provider>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Provider>
  )
}

export default Layout
