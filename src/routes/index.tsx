import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import MainPage from "../pages/main"
import NewsPage from "../pages/news"
import ErrorPage from "../pages/error"
import Reading from "../pages/reading"
import SearchPage from "../pages/search"

const validCategories  =["xeberler","medeniyyet","iqtisadiyyat","texnologiya","siyaset","idman"]
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path:"/",
                    element:<MainPage/>
                },
                {

                    path:"/news/:category",
                    element:<NewsPage validCategories={validCategories}/>, 
                       
                },
                {
                    path:"reading/:slug",
                    element:<Reading/>
                },
                {
                    path:"/search",
                    element:<SearchPage/>
                },
              
              
            ]
            
        },
       
       
    ])