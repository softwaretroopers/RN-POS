import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import {
  Button,
  Caption,
  DataTable,
  Avatar,
  Title,
  Divider,
} from "react-native-paper";

import AppColors from "../configs/AppColors";

function AppInvoice(props) {
  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            size={60}
            source={require("../assets/adaptive-icon.png")}
            style={{ margin: "2%", backgroundColor: "white" }}
          />
          <Title style={{ fontWeight: "bold" }}>Software Troopers</Title>
        </View>
        <View>
          <Caption>Invoice #: 123</Caption>
          <Caption>Created : 12/04/2021</Caption>
          <Caption>Shop : Anonymous</Caption>
        </View>
      </View>
      <Divider />
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Cell>Payment Method :</DataTable.Cell>
            <DataTable.Cell numeric>Check</DataTable.Cell>
          </DataTable.Header>
        </DataTable>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Item</DataTable.Title>
            <DataTable.Title numeric>Unit Price</DataTable.Title>
            <DataTable.Title numeric>Quantity</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Frozen yogurt</DataTable.Cell>
            <DataTable.Cell numeric>Rs.250.00</DataTable.Cell>
            <DataTable.Cell numeric>10</DataTable.Cell>
            <DataTable.Cell numeric>Rs.2,500.00</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
            <DataTable.Cell numeric>Rs.500.00</DataTable.Cell>
            <DataTable.Cell numeric>20</DataTable.Cell>
            <DataTable.Cell numeric>Rs.5,000.00</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <Title
          style={{
            fontWeight: "bold",
            fontSize: 16,
            alignSelf: "flex-end",
            marginEnd: "3.5%",
          }}
        >
          Total : Rs.7,500.00
        </Title>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <Button
          color={AppColors.primary}
          icon="close-circle"
          mode="contained"
          onPress={(values) => props.navigation.navigate("HomeScreen")}
        >
          Close
        </Button>
        <Button
          color={AppColors.primary}
          icon="printer"
          mode="contained"
          onPress={(values) => props.navigation.navigate("HomeScreen")}
        >
          Print
        </Button>
      </View>
    </View>
  );
}

export default AppInvoice;
