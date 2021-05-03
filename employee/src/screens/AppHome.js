import React from "react";
import { View, FlatList, StyleSheet, StatusBar, ScrollView } from "react-native";
import { Button, Avatar, Title, Caption, List,
  DataTable,
  Divider, } from "react-native-paper";

import AppColors from "../configs/AppColors";
import Invoices from "../database/Invoices";

function AppHome(props) {
  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />

      <FlatList
        data={Invoices}
        keyExtractor={(invoice) => invoice.invoiceID}
        renderItem={({ item }) => (
          <List.Section>


            <View style={styles.invoiceInfoSection}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar.Icon size={40} icon="file-document" />
                  <Title style={{ fontSize: 12 }}>{item.invoiceID}</Title>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Title style={styles.title}>{item.shopName}</Title>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Caption style={styles.caption}>{item.date}</Caption>
                  </View>
                </View>
              </View>
              <List.Accordion
              title="View Invoice"><Divider/>
 <View style={{paddingBottom:'5%'}}>
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
          icon="printer"
          mode="contained"
        >
          Print
        </Button>
      </View>
    </View>

              </List.Accordion>
            </View>
          </List.Section>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  invoiceInfoSection: {
    backgroundColor: AppColors.background,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    margin: "1%",
    elevation: 10,
  },
});

export default AppHome;
