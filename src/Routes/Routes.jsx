import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'register',
            element: <Register></Register>
          }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
              path: ':id',
              element: <Category></Category>,
              loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },

    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ])

  export default router;