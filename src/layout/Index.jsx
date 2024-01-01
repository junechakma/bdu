
import { Outlet } from 'react-router-dom'
import TopBar from '../components/Header/TopBar'

function Index() {
  return (
    <>
    <TopBar/>
    <Outlet></Outlet>
    </>
  )
}

export default Index