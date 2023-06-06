import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Help from './components/Help';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Instamart from './components/Instamart';
import AppLayout from "./components/AppLayout"
import Signup from './components/Signup';

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
  
        },
        {
          path: "/about",
          element: <About />,
  
        },
        {
          path: "/help",
          element: <Help />,
  
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />,
  
        },
        {
          path: "/cart",
          element: <Cart />,
  
        },
        {
          path: "/login",
          element: <Login />,
  
        },
        {
          path: "/instamart",
          element: <Instamart />,
  
        },
        {
          path: "/signup",
          element: <Signup />,
  
        },

      ]
  
    },
  
  
  
  ])

  export default appRouter