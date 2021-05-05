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

function AppEmployee(props) {
  const [users, setUsers] = useState([]);

  const userRef = firebase.firestore().collection("users");

  useEffect(() => {
    userRef.onSnapshot(
      (querySnapshot) => {
        const newUsers = [];
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          user.id = doc.id;
          newUsers.push(user);
        });
        setUsers(newUsers);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const [visible, setVisible] = React.useState(false);

  const showConfirmation = () => setVisible(true);

  const hideConfirmation = () => setVisible(false);
  return (
    <Provider>
      <View style={styles.screen}>
        <StatusBar
          backgroundColor={AppColors.primary}
          barStyle="light-content"
        />
        <FlatList
          data={users}
          keyExtractor={(employee) => employee.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Avatar.Icon size={50} icon="account" />
              <Title style={styles.title}>{item.fullName}</Title>
              <Caption>{item.email}</Caption>
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
          onPress={() => props.navigation.navigate("AddEmployeeScreen")}
        />
        <Portal>
          <Dialog visible={visible} onDismiss={hideConfirmation}>
            <Dialog.Title>Confirmation</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Are you sure you want to delete this Employee?
              </Paragraph>
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

export default AppEmployee;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    elevation: 10,
    backgroundColor: AppColors.background,
    margin: "2%",
    width: "75%",
    alignSelf: "center",
    borderRadius: 10,
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
