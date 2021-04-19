import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import * as Yup from "yup";
import { Switch, Text, IconButton } from "react-native-paper";

import {
  AppForm,
  AppFormInput,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";
import AppColors from "../configs/AppColors";

const validationSchema = Yup.object().shape({
  iName: Yup.string().required().min(3).label("Shop Name"),
  uPriceA: Yup.number().required().min(1).label("Unit Price A"),
  uPriceB: Yup.number().min(1).label("Unit Price B"),
  uPriceC: Yup.number().min(1).label("Unit Price C"),
  store: Yup.object().required().label("Store"),
  qty: Yup.number().required().label("Quantity"),
  desc: Yup.string().label("Description"),
});

const stores = [
  {
    label: "Kadawatha",
    value: 1,
    icon: "office-building",
  },
  {
    label: "Kelaniya",
    value: 2,
    icon: "office-building",
  },
];

function AppAddStock(props) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => props.navigation.goBack()}
        validationSchema={validationSchema}
      >
        <ScrollView style={{ marginTop: "3%" }}>
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="package-variant"
            label="Item Name"
            placeholder="Enter the Item Name"
            name="iName"
            textContentType="name"
            mode="flat"
          />
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="alpha-a"
            label="Unit Price A"
            placeholder="Enter the Unit Price for A Category"
            name="uPriceA"
            mode="flat"
            keyboardType="number-pad"
          />
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="alpha-b"
            label="Unit Price B"
            placeholder="Enter the Unit Price for B Category"
            name="uPriceB"
            mode="flat"
            keyboardType="number-pad"
          />
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="alpha-c"
            label="Unit Price C"
            placeholder="Enter the Unit Price for C Category"
            name="uPriceC"
            mode="flat"
            keyboardType="number-pad"
          />
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="format-list-numbered"
            label="Quantity"
            placeholder="Enter the Quantity"
            name="qty"
            mode="flat"
            keyboardType="number-pad"
          />
          <AppFormInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="inbox-full"
            label="Description"
            placeholder="Enter the Description"
            name="desc"
            textContentType="name"
            mode="flat"
          />
          <AppFormPicker
            items={stores}
            name="store"
            desc="Store"
            placeholderIcon="office-building"
            placeholder="Store"
          />
          <View
            style={{
              flexDirection: "row",
              borderStyle: "solid",
              borderBottomWidth: 1,
              borderBottomColor: "#cdcdcd",
              alignItems: "center",
              backgroundColor: "#e7e7e7",
              padding: "9%",
            }}
          >
            <IconButton
              style={{ position: "absolute", left: "2%" }}
              icon="checkbox-multiple-marked"
              size={20}
              color={AppColors.black}
            />
            <Text
              style={{
                color: "#747474",
                fontSize: 16,
                position: "absolute",
                left: "14.5%",
              }}
            >
              Availability
            </Text>
            <Switch
              style={{ position: "absolute", right: "3%" }}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </View>
        </ScrollView>
        <AppSubmitButton
          color="primary"
          mode="contained"
          icon="check-circle"
          text="Submit"
          style={styles.button}
        />
      </AppForm>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerFooter: { padding: "4%", marginTop: "5%" },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
    padding: "4%",
    marginVertical: "3%",
  },
  text: {
    color: AppColors.primary,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppAddStock;
