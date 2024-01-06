import { createBrowserRouter } from 'react-router-dom'
import Index from '../layout/Index'
import Home from '../pages/Home/Home'
import About from '../pages/about/about'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Index/>,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    }
])