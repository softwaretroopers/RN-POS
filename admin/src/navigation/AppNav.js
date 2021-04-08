import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Avatar, Button } from "react-native-paper";

import AppLogin from "../screens/AppLogin";
import AppHome from "../screens/AppHome";
import AppShop from "../screens/AppShop";
import AppStock from "../screens/AppStock";
import AppEmployee from "../screens/AppEmployee";
import AppProfile from "../screens/AppProfile";
import AppProfileEdit from "../screens/AppProfileEdit";
import AppAddShop from "../screens/AppAddShop";
import AppAddEmployee from "../screens/AppAddEmployee";

import AppDrawerContent from "./AppDrawerContent";
import AppColors from "../configs/AppColors";
import AppAddStock from "../screens/AppAddStock";
import AppStore from "../screens/AppStore";
import AppAddStore from "../screens/AppAddStore";
import AppAddInvoice from "../screens/AppAddInvoice";
import AppAddReturn from "../screens/AppAddReturn";

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const InvoiceStack = createStackNavigator();
const ShopStack = createStackNavigator();
const StockStack = createStackNavigator();
const StoreStack = createStackNavigator();
const EmployeeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AppNav = () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MainStack.Screen
      name="LoginScreen"
      component={AppLogin}
      options={{
        title: "Login",
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="DrawerNav"
      component={DrawerNav}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

const DrawerNav = () => (
  <Drawer.Navigator
    initialRouteName="HomeScreens"
    drawerContent={(props) => <AppDrawerContent {...props} />}
  >
    <Drawer.Screen name="HomeScreens" component={HomeScreens} />
    <Drawer.Screen name="StockScreens" component={StockScreens} />
    <Drawer.Screen name="ShopScreens" component={ShopScreens} />
    <Drawer.Screen name="StoreScreens" component={StoreScreens} />
    <Drawer.Screen name="EmployeeScreens" component={EmployeeScreens} />
    <Drawer.Screen name="ProfileScreens" component={ProfileScreens} />
  </Drawer.Navigator>
);

const HomeScreens = (props) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="HomeScreen"
      component={AppHome}
      options={{
        title: "Invoices",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="AddInvoiceScreens"
      component={AddInvoiceScreens}
      options={{
        title: "Add Invoice",
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="AddShopScreen"
      component={AppAddShop}
      options={{
        title: "New Shop",
      }}
    />
    <HomeStack.Screen
      name="AddEmployeeScreen"
      component={AppAddEmployee}
      options={{
        title: "New Employee",
      }}
    />
    <HomeStack.Screen
      name="AddStockScreen"
      component={AppAddStock}
      options={{
        title: "New Item",
      }}
    />
  </HomeStack.Navigator>
);

const AddInvoiceScreens = (props) => (
  <InvoiceStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <InvoiceStack.Screen
      name="AddInvoiceScreen"
      component={AppAddInvoice}
      options={{
        title: "New Invoice",
      }}
    />
    <InvoiceStack.Screen
      name="AddReturnScreen"
      component={AppAddReturn}
      options={{
        title: "Deduct Returns",
      }}
    />
  </InvoiceStack.Navigator>
);

const StockScreens = (props) => (
  <StockStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <StockStack.Screen
      name="StockScreen"
      component={AppStock}
      options={{
        title: "Stock",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <StockStack.Screen
      name="AddStockScreen"
      component={AppAddStock}
      options={{
        title: "New Item",
      }}
    />
  </StockStack.Navigator>
);

const ShopScreens = (props) => (
  <ShopStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ShopStack.Screen
      name="ShopScreen"
      component={AppShop}
      options={{
        title: "Shops",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <ShopStack.Screen
      name="AddShopScreen"
      component={AppAddShop}
      options={{
        title: "New Shop",
      }}
    />
  </ShopStack.Navigator>
);

const StoreScreens = (props) => (
  <StoreStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <StoreStack.Screen
      name="StoreScreen"
      component={AppStore}
      options={{
        title: "Store",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <ShopStack.Screen
      name="AddStoreScreen"
      component={AppAddStore}
      options={{
        title: "New Store",
      }}
    />
  </StoreStack.Navigator>
);

const EmployeeScreens = (props) => (
  <EmployeeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <EmployeeStack.Screen
      name="EmployeeScreen"
      component={AppEmployee}
      options={{
        title: "Employee",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <EmployeeStack.Screen
      name="AddEmployeeScreen"
      component={AppAddEmployee}
      options={{
        title: "New Employee",
      }}
    />
  </EmployeeStack.Navigator>
);

const ProfileScreens = (props) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.background,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="ProfileScreen"
      component={AppProfile}
      options={{
        title: "Profile",
        headerLeft: () => (
          <Button
            labelStyle={{ fontSize: 24 }}
            icon="menu"
            color={AppColors.background}
            onPress={() => props.navigation.openDrawer()}
          />
        ),
      }}
    />
    <ProfileStack.Screen
      name="ProfileEditScreen"
      component={AppProfileEdit}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

export default AppNav;
