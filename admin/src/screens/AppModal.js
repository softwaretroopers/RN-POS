import React from "react";
import {
  Modal,
  Portal,
  Button,
  Provider,
  Avatar,
  Title,
  Caption,
} from "react-native-paper";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";

import AppColors from "../configs/AppColors";

const invoices = [
  {
    invoiceID: "#011801",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011802",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011803",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011804",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011805",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011806",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011807",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011808",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011809",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011810",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011811",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
];

function AppModal(props) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <FlatList
            data={invoices}
            keyExtractor={(invoice) => invoice.invoiceID.toString()}
            renderItem={({ item }) => (
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
                  <Button
                    onPress={hideModal}
                    color={AppColors.primary}
                    icon="eye"
                  >
                    View
                  </Button>
                </View>
              </View>
            )}
          />
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
}

export default AppModal;

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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});
