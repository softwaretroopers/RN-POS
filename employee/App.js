import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNav from "./src/navigation/AppNav";
import AppAddInvoice from "./src/screens/AppAddInvoice";

export default function App() {
  return (
    <NavigationContainer>
      <AppNav></AppNav>
    </NavigationContainer>
  );
}
