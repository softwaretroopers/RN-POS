import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppLogin from "../screens/AppLogin";
import AppHome from "../screens/AppHome";
import AppStock from "../screens/AppStock";
import AppShop from "../screens/AppShop";
import AppProfile from "../screens/AppProfile";

import AppColors from "../configs/AppColors";
import AppAddInvoice from "../screens/AppAddInvoice";
import AppAddItems from "../screens/AppAddItems";
import AppAddReturn from "../screens/AppAddReturn";

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
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
      name="HomeNav"
      component={HomeNav}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

const HomeNav = () => (
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
      name="TabNav"
      component={TabNav}
      options={{ headerShown: false }}
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

const TabNav = () => (
  <Tab.Navigator
    initialRouteName="HomeScreens"
    activeColor={AppColors.background}
    barStyle={{ backgroundColor: AppColors.primary }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={AppHome}
      options={{
        title: "Home",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="home"
            size={24}
            color={AppColors.background}
          />
        ),
      }}
    />

    <Tab.Screen
      name="StockScreen"
      component={AppStock}
      options={{
        title: "Stock",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="package-variant"
            size={24}
            color={AppColors.background}
          />
        ),
      }}
    />
    <Tab.Screen
      name="InvoiceScreen"
      component={AppAddInvoice}
      options={{
        title: "Invoice",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={24}
            color={AppColors.background}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ShopScreen"
      component={AppShop}
      options={{
        title: "Shops",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="store"
            size={24}
            color={AppColors.background}
          />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileScreen"
      component={AppProfile}
      options={{
        title: "Profile",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color={AppColors.background}
          />
        ),
      }}
    />
  </Tab.Navigator>
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
      name="AddItemsScreen"
      component={AppAddItems}
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

export default AppNav;
