import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  DataTable,
  IconButton,
  TextInput,
  Title,
  Text,
  ToggleButton,
  Divider,
  Searchbar,
  Avatar,
  Chip,
} from "react-native-paper";
import AppColors from "../configs/AppColors";
import AppRenderIf from "../configs/AppRenderIf";
import StockItems from "../database/StockItems";
import { firebase } from "../database/config";

const totalPrice = 10000;

function AppAddItems(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, setValue] = React.useState("cash");
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [entityText, setEntityText] = useState("");
  const [entities, setEntities] = useState([]);

  const [StockInvItems, setStockInvItems] = useState([]);
  const stockInvRef = firebase.firestore().collection("stockItems");

  useEffect(() => {
    stockInvRef.onSnapshot(
      (querySnapshot) => {
        const newStockInv = [];
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          newStockInv.push(shop);
        });
        setStockInvItems(newStockInv);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  // const renderEntity = ({ item }) => {
  //   return <Text>{item.text}</Text>;
  // };

  //add stock to invoice
  const stockInvRefAdd = firebase.firestore().collection("invoicesAddStocks");
  const [StockInvItemAdd, setStockInvItemAdd] = useState([]);
  //stock add
  useEffect(() => {
    stockInvRefAdd.onSnapshot(
      (querySnapshot) => {
        const newStockInv = [];
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          newStockInv.push(shop);
        });
        setStockInvItemAdd(newStockInv);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const onAddButtonPress = () => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      quantity: "12",
      stockID: "NbJRN6cOBwJ4Z2wBm0J4",
      createdAt: timestamp,
    };
    stockInvRefAdd
      .add(data)
      .then((_doc) => {
        setEntityText("");
        Keyboard.dismiss();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
          <Title style={{ marginHorizontal: "2%", fontSize: 16 }}>
            Payment Method
          </Title>
          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton icon="cash" value="cash"></ToggleButton>
            <ToggleButton icon="credit-card" value="card"></ToggleButton>
            <ToggleButton
              icon="card-text-outline"
              value="cheque"
            ></ToggleButton>
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
          onPress={(values) => props.navigation.navigate("AddReturnScreen")}
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
          <DataTable.Title>Discount</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell
            style={{
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(true)}
            >
              <IconButton icon="plus" size={15} color={AppColors.primary} />
              <Text style={{ color: AppColors.primary }}>Add New Item</Text>
            </TouchableOpacity>
          </DataTable.Cell>
        </DataTable.Row>
        <FlatList
          style={{ marginBottom: "76%" }}
          data={StockItems}
          keyExtractor={(invoiceItem) => invoiceItem.itemID.toString()}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell>{item.itemName}</DataTable.Cell>
              <DataTable.Cell>{item.unitPrice}</DataTable.Cell>
              <DataTable.Cell>
                <TextInput
                  placeholder={item.stock}
                  mode="outlined"
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: AppColors.background,
                    height: 25,
                  }}
                ></TextInput>
              </DataTable.Cell>
              <DataTable.Cell>
                <TextInput
                  placeholder="Rs."
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
            data={StockInvItems}
            keyExtractor={(stock) => stock.itemID.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar.Icon
                      size={40}
                      icon="package-variant"
                      style={{ marginRight: "2%" }}
                    />
                    <Title style={styles.title}>{item.itemName}</Title>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {AppRenderIf(
                      item.stock > 0,
                      <Chip
                        selectedColor={AppColors.green}
                        style={{ margin: 10 }}
                        icon="circle"
                      >
                        Available
                      </Chip>
                    )}
                    {AppRenderIf(
                      item.stock == 0,
                      <Chip
                        selectedColor={AppColors.red}
                        style={{ margin: 10 }}
                        icon="circle"
                      >
                        Unavailable
                      </Chip>
                    )}
                    {AppRenderIf(
                      10 < item.stock,
                      <Chip style={{ marginRight: "3%" }}>
                        Stock: {item.stock}
                      </Chip>
                    )}
                    {AppRenderIf(
                      10 >= item.stock,
                      <Chip
                        selectedColor={AppColors.orange}
                        style={{ marginRight: "3%" }}
                      >
                        Stock: {item.stock} (Low)
                      </Chip>
                    )}
                    <Chip style={{ marginLeft: "3%" }}>
                      Rs.{item.unitPrice}
                    </Chip>
                  </View>
                </View>
                <Divider
                  style={{ marginLeft: "2%", width: 1, height: "100%" }}
                />
                <View>
                  {AppRenderIf(
                    item.stock > 0,
                    <IconButton
                      icon="plus-circle"
                      color={AppColors.primary}
                      size={40}
                      onPress={onAddButtonPress}
                    />
                  )}
                  {AppRenderIf(
                    item.stock == 0,
                    <IconButton
                      icon="plus-circle"
                      color={AppColors.primary}
                      value={item.itemName}
                      size={40}
                      disabled
                    />
                  )}
                </View>
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

export default AppAddItems;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    marginHorizontal: "2%",
    elevation: 10,
    backgroundColor: AppColors.background,
    margin: "1%",
    borderRadius: 10,
    flexDirection: "row",
  },
  title: { fontSize: 16 },
});
