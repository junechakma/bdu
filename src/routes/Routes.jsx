import { createBrowserRouter } from 'react-router-dom'
import Index from '../layout/Index'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Notice from '../pages/Notice/Notice'
import Academic from '../pages/Acaddemic/Academic'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Index/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:"/notice",
                element:<Notice/>
            },
            {
                path:"/academic",
                element:<Academic/>
            }

        ]
    }
])