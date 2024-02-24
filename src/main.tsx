import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Root from './routes/root.tsx';
import ProductEntryScreen from "./screens/1.productEntry/index.tsx"
import ProductsScreen from './screens/2.products/index.tsx';
import './index.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import CartScreen from './screens/4.cart/index.tsx';
import ProductDetailsScreen from './screens/3.productDetails/index.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product-entry",
        element: <ProductEntryScreen />,
      },
      {
        path: "/products",
        element: <ProductsScreen />,
      },
      {
        path: "product-details",
        element: <ProductDetailsScreen />
      },
      {
        path: "/cart",
        element: <CartScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
