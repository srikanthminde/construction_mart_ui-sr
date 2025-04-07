 import { store } from './app/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './features/common/Home';
import Products from './features/common/product/Products';
import Login from './features/user/Login';
// import Home from './features/Home';
// import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
// import WelcomePage from './features/common/WelcomePage';
import Dashboard from './features/dashbord/Dashboard';
import AddProduct from './features/dashbord/AddProduct';
import Cart from './features/common/Cart';
import About from './features/about/About';
import ProductDeltails from './features/common/ProductDeltails';
import PlaceOrder from './features/common/PlaceOrder';
import Order from './features/common/Order';
import Wishlist from './features/common/Wishlist';

// import ItemsOrder from './features/common/ItemsOrder';
// import ItemsOrder from './features/common/ItemsOrder';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
    {
      path:"/",
      element:<Home></Home>,
     
     
      children:[
        {
          path:"/About",
          element:<About></About>
        },
        {
          path:"/wishlist",
          element:<Wishlist></Wishlist>

        },
        {
          path:"/login",
          element:<Login></Login>,
          
        },
        
        {
          path:"/",
          element:<Products></Products>
        },
       
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:"/dashboard/Addproducts",
              element:<AddProduct></AddProduct>,
            }, 
            {
              path:"/dashboard/viewOrder",
              element:<Order></Order>
            },
          ],
         
        },
        {
          path:"/productDeltails/:id",
          element:<ProductDeltails></ProductDeltails>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/placeOrder",
          element:<PlaceOrder></PlaceOrder>
        },
  
      ]
    },

    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
