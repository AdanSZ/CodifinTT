import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Outlet, Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { MenuOutlined } from "@ant-design/icons";


export const selectedCart = createSelector(
  (state: RootState) => state.cart.items,
  (items) => items.map(entry => entry)
);

export const selectedProducts = createSelector(
  (state: RootState) => state.products.items,
  (items) => items.map(entry => entry)
);


const showMenu = () => {
  const nav = document.getElementById('nav-menu')
  if(nav?.classList.contains('show-nav')){
    nav?.classList.remove("show-nav");
  } else {
    nav?.classList.add("show-nav");
  }
  
}
export default function Root() {
    const cart = useSelector(selectedCart, shallowEqual);
    const products = useSelector(selectedProducts, shallowEqual);

    return (
      <>
        <div id="sidebar">
          <h1>Text</h1>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>Simple e-commerce</h3>
            <MenuOutlined className="menuBtn" onClick={showMenu}/>
          </div>
          <nav id="nav-menu">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/product-entry`}>Product Entry</Link>
              </li>
              <li>
                <Link to={`/products`}>Products ({products.length})</Link>
              </li>
              <li>
                <Link to={`/cart`}>Cart ({cart.length})</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" style={{overflowY: 'scroll'}}>
            <Outlet />
        </div>
      </>
    );
  }