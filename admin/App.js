import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppLogin from "./src/screens/AppLogin";
import AppHome from "./src/screens/AppHome";
import AppStock from "./src/screens/AppStock";
import AppEmployee from "./src/screens/AppEmployee";
import AppShop from "./src/screens/AppShop";
import AppProfileEdit from "./src/screens/AppProfileEdit";
import AppProfile from "./src/screens/AppProfile";
import AppModal from "./src/screens/AppModal";
import AppAddEmployee from "./src/screens/AppAddEmployee";
import AppAddShop from "./src/screens/AppAddShop";
import AppNav from "./src/navigation/AppNav";

export default function App() {
  return (
    <NavigationContainer>
      <AppNav></AppNav>
    </NavigationContainer>
  );
}
