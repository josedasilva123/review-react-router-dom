import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header>
         <ul role="navigation">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/contact">Contact Us</Link>
            </li>
            <li>
               <Link to="/register">Register</Link>
            </li>
         </ul>
      </header>
   );
};

export default Header;
