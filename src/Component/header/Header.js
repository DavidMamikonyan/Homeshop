import React from "react";
import { NavLink as Link } from "react-router-dom";
import logo from "./image/exfinity_schrift_RGB_300dpi_transparent.png";
import heart from "./image/heart.png";
import user from "./image/user.png";
import shoppingCart from "./image/shopping-cart.png";
import globe from "./image/globe.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_inner">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation">
          <Link to="/events">Events</Link>
          <Link to="tickets">Ticket</Link>
          <Link to="travel">Travel</Link>
          <Link to="hotel">Hotel</Link>
          <Link to="museum">Museum</Link>
        </div>
        <div className="wishlist_cart_account">
          <div className="wishlist">
            <img src={heart} alt="heart" />
            <span>Wishlist</span>
          </div>
          <div className="cart">
            <img src={shoppingCart} alt="shopping-cart" />
            <span>Cart</span>
          </div>
          <div className="account">
            <img src={user} alt="user" />
            <span>Account</span>
          </div>
        </div>
        <div className="language">
          <img src={globe} alt="globe" />
          <span>ENG</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
