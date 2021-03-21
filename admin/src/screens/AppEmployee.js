import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  FAB,
  Portal,
  Provider,
} from "react-native-paper";

import AppColors from "../configs/AppColors";

const employees = [
  {
    empID: "ST-01N1",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N2",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N3",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N4",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N5",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N6",
    empName: "Mr.Anonymous",
  },
  {
    empID: "ST-01N7",
    empName: "Mr.Anonymous",
  },
];

function AppEmployee(props) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={employees}
        keyExtractor={(employee) => employee.empID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar.Icon size={50} icon="account" />
            <Title style={styles.title}>{item.empName}</Title>
            <Caption>{item.empID}</Caption>
          </View>
        )}
      />
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? "close" : "plus"}
            actions={[
              {
                icon: "office-building",
                label: "Shop",
                onPress: () => console.log("Pressed shop"),
              },
              {
                icon: "package-variant",
                label: "Stock",
                onPress: () => console.log("Pressed stock"),
              },
              {
                icon: "file-document",
                label: "Invoice",
                onPress: () => console.log("Pressed invoice"),
              },
              {
                icon: "account",
                label: "Employee",
                onPress: () => console.log("Pressed employee"),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
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
