
import { Outlet } from 'react-router-dom'
import TopBar from '../pages/shared/TopBar'

function Index() {
  return (
    <>
    <TopBar/>
    <Outlet></Outlet>
    </>
  )
}

export default Index