import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda on Line"} />
    </ChakraProvider>
  );
};

export default App;
