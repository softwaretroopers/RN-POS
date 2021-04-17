import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native-paper";

import AppLogin from "../screens/AppLogin";
import AppHome from "../screens/AppHome";
import AppStock from "../screens/AppStock";
import AppProfile from "../screens/AppProfile";

import AppDrawerContent from "./AppDrawerContent";
import AppColors from "../configs/AppColors";
import AppAddInvoice from "../screens/AppAddInvoice";
import AppAddReturn from "../screens/AppAddReturn";

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const StockStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const InvoiceStack = createStackNavigator();

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
  </StockStack.Navigator>
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
  </ProfileStack.Navigator>
);

export default AppNav;
