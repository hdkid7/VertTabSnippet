// eslint-disable-next-line no-unused-vars
import React from "react";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinkMaker = ({ route, children }) => (
  <NavLink exact to={`/${route}`}>
    {children}
  </NavLink>
);

export default NavLinkMaker;
