import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Caption, Title } from "react-native-paper";
import * as Yup from "yup";

import { AppForm, AppSubmitButton, AppFormPicker } from "../components/forms";
import AppColors from "../configs/AppColors";
import Shops from "../database/Shops";

const validationSchema = Yup.object().shape({
  shop: Yup.string().min(3).label("Shop Name"),
});

function AppAddInvoice(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter Invoice Details</Text>
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: AppColors.background,
          },
        ]}
      >
        <View style={styles.innerFooter}>
          <AppForm
            initialValues={{ shop: "" }}
            onSubmit={(values) =>
              props.navigation.navigate("AddInvoiceScreens")
            }
            validationSchema={validationSchema}
          >
            <ScrollView>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: "3%",
                }}
              >
                <Title style={{ fontSize: 18 }}>
                  Invoice ID :{" "}
                  <Caption style={{ fontSize: 18 }}>#011811</Caption>
                </Title>
              </View>
              <AppFormPicker
                items={Shops}
                name="shop"
                desc="Shop"
                placeholderIcon="store"
                placeholder="Shop"
              />

              <AppSubmitButton
                color="primary"
                mode="contained"
                icon="check-circle"
                text="Confirm"
                style={styles.button}
              />
            </ScrollView>
          </AppForm>
        </View>
      </View>
    </View>
  );
}

export default AppAddInvoice;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: "5%",
    justifyContent: "center",
  },
  innerFooter: { padding: "4%", marginTop: "5%" },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
    padding: "4%",
    marginTop: "5%",
  },
  forget: {
    color: AppColors.primaryVariant,
    fontSize: 16,
    marginTop: "3%",
    alignSelf: "center",
  },
  text: {
    color: AppColors.background,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
