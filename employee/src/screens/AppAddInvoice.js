import React from "react";
import { View, FlatList, Modal, TouchableOpacity } from "react-native";
import {
  DataTable,
  IconButton,
  TextInput,
  Title,
  Text,
  ToggleButton,
  Divider,
  Searchbar,
} from "react-native-paper";
import AppColors from "../configs/AppColors";
const totalPrice = 10000;
const invoiceItems = [
  {
    itemID: "#001",
    itemName: "Anonymous Item",
    quantity: "10",
    unitPrice: "250",
    stock: "20",
  },
  {
    itemID: "#002",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#003",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "10",
  },
  {
    itemID: "#004",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#005",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "25",
  },
  {
    itemID: "#006",
    itemName: "Anonymous Item",
    quantity: "10",
    unitPrice: "250",
    stock: "20",
  },
  {
    itemID: "#007",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#008",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "10",
  },
  {
    itemID: "#009",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#010",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "25",
  },
  {
    itemID: "#011",
    itemName: "Anonymous Item",
    quantity: "10",
    unitPrice: "250",
    stock: "20",
  },
  {
    itemID: "#012",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#013",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "10",
  },
  {
    itemID: "#014",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#015",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "25",
  },
  {
    itemID: "#016",
    itemName: "Anonymous Item",
    quantity: "10",
    unitPrice: "250",
    stock: "20",
  },
  {
    itemID: "#017",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#018",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "10",
  },
  {
    itemID: "#019",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "15",
  },
  {
    itemID: "#020",
    itemName: "Bnonymous Item",
    quantity: "100",
    unitPrice: "250",
    stock: "05",
  },
];

function AppAddInvoice(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, setValue] = React.useState("cash");
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: "1%",
          margin: "1%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title style={{ marginHorizontal: "3%", fontSize: 16 }}>
            Payment Method
          </Title>
          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton icon="cash" value="cash"></ToggleButton>
            <ToggleButton icon="credit-card" value="card"></ToggleButton>
          </ToggleButton.Row>
        </View>
        <Divider style={{ marginLeft: "2%", width: 1, height: "100%" }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title style={{ marginLeft: "5%", fontSize: 16 }}>Total: </Title>
          <Text>Rs.{totalPrice}</Text>
        </View>
        <Divider style={{ marginLeft: "2%", width: 1, height: "100%" }} />
        <IconButton
          onPress={(values) => props.navigation.goBack()}
          icon="arrow-collapse-right"
          size={24}
          color={AppColors.primary}
        ></IconButton>
      </View>
      <Divider />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Item</DataTable.Title>
          <DataTable.Title>Unit Price</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title>Stock</DataTable.Title>
          <DataTable.Title>Discount</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell
            style={{
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                onPress={() => setModalVisible(true)}
                icon="plus"
                size={15}
                color={AppColors.primary}
              />
              <Text style={{ color: AppColors.primary }}>Add New Item</Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
        <FlatList
          style={{ marginBottom: "76%" }}
          data={invoiceItems}
          keyExtractor={(invoiceItem) => invoiceItem.itemID.toString()}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell>{item.itemName}</DataTable.Cell>
              <DataTable.Cell>{item.unitPrice}</DataTable.Cell>
              <DataTable.Cell>
                <TextInput
                  mode="outlined"
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: AppColors.background,
                    height: 25,
                  }}
                ></TextInput>
              </DataTable.Cell>
              <DataTable.Cell>{item.stock}</DataTable.Cell>
              <DataTable.Cell>
                <TextInput
                  mode="outlined"
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: AppColors.background,
                    height: 25,
                  }}
                ></TextInput>
              </DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        onTouchCancel={() => setModalVisible(false)}
      >
        <View>
          <Searchbar
            placeholder="Search Items"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <FlatList
            style={{ marginBottom: "11%" }}
            contentContainerStyle={{}}
            data={invoiceItems}
            keyExtractor={(invoiceItem) => invoiceItem.itemID.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View
                  style={{
                    backgroundColor: AppColors.background,
                    borderWidth: 1,
                    borderColor: AppColors.black,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: "10%",
                    marginBottom: "2%",
                    padding: "2%",
                  }}
                >
                  <Title style={{ fontSize: 12 }}>{item.itemName}</Title>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

export default AppAddInvoice;
