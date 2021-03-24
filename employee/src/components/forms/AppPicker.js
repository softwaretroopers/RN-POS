import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { Text, IconButton } from "react-native-paper";

import AppPickerItem from "./AppPickerItem";
import AppColors from "../../configs/AppColors";

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <IconButton
              icon={icon}
              size={20}
              color={AppColors.black}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.text}>{placeholder}</Text>
          )}

          <IconButton icon="chevron-down" size={20} color={AppColors.black} />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        style={styles.listContainer}
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        onTouchCancel={() => setModalVisible(false)}
      >
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            contentContainerStyle={{}}
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "50%",
    padding: "3%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e7e7e7",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: AppColors.black,
    flex: 1,
  },
  text: {
    flex: 1,
    color: "#747474",
    textAlign: "right",
    fontSize: 16,
  },
  list: {
    width: "60%",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.background,
  },
});

export default AppPicker;
