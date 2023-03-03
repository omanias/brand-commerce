import React from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <h3>Brand-Commerce</h3>

      <Menu>
        <MenuButton>Categorias</MenuButton>
        <MenuList>
          <MenuItem>Categoria A</MenuItem>
          <MenuItem>Categoria B</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
  );
};

export default NavBar;
