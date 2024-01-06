
import { Outlet } from 'react-router-dom'
import TopBar from '../pages/shared/TopBar'
import Footer from '../pages/shared/Footer'
import Header from '../pages/shared/Header'
import MenuBar from '../pages/shared/MenuBar'

function Index() {
  return (
    <>
    <TopBar/>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default Index