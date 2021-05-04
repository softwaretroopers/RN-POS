import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  FAB,
  Provider,
  IconButton,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from "react-native-paper";
import { firebase } from "../firebase/Config";

import AppColors from "../configs/AppColors";

const stores = [
  {
    storeID: "#001",
    storeName: "Kadawatha",
    supervisor: "Mr.Anonymous",
  },
  {
    storeID: "#002",
    storeName: "Kelaniya",
    supervisor: "Mr.Anonymous",
  },
];

function AppStore(props) {
  const [visible, setVisible] = React.useState(false);

  const showConfirmation = () => setVisible(true);

  const hideConfirmation = () => setVisible(false);

  const [stores, setStores] = useState([]);

  const storeRef = firebase.firestore().collection("stores");

  useEffect(() => {
    storeRef.onSnapshot(
      (querySnapshot) => {
        const newStores = [];
        querySnapshot.forEach((doc) => {
          const store = doc.data();
          store.id = doc.id;
          newStores.push(store);
        });
        setStores(newStores);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Provider>
      <View style={styles.screen}>
        <StatusBar
          backgroundColor={AppColors.primary}
          barStyle="light-content"
        />
        <FlatList
          data={stores}
          keyExtractor={(store) => store.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Avatar.Icon size={40} icon="store" />
              <Title style={styles.title}>{item.name}</Title>
              <Caption>{item.supervisor}</Caption>
              <View style={{ flexDirection: "row" }}>
                <IconButton
                  icon="delete"
                  color={AppColors.red}
                  size={20}
                  onPress={showConfirmation}
                />
                <IconButton
                  icon="pen"
                  color={AppColors.yellow}
                  size={20}
                  onPress={() => console.log("Pressed")}
                />
              </View>
            </View>
          )}
        />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => props.navigation.navigate("AddStoreScreen")}
        />
        <Portal>
          <Dialog visible={visible} onDismiss={hideConfirmation}>
            <Dialog.Title>Confirmation</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are you sure you want to delete this Store?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideConfirmation}>No</Button>
              <Button onPress={hideConfirmation}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}

export default AppStore;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    elevation: 10,
    backgroundColor: AppColors.background,
    margin: "1%",
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
  },
  title: { fontSize: 16 },
  screen: { flex: 1, justifyContent: "center" },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});
