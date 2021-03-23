import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormInput, AppSubmitButton } from "../components/forms";
import AppColors from "../configs/AppColors";

const validationSchema = Yup.object().shape({
  stName: Yup.string().required().min(3).label("Store Name"),
  supName: Yup.string().min(3).label("Owner's Name"),
});

function AppAddStore(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter New Store Details</Text>
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
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => props.navigation.goBack()}
            validationSchema={validationSchema}
          >
            <ScrollView>
              <AppFormInput
                autoCapitalize="words"
                autoCorrect={false}
                icon="store"
                label="Store Location"
                placeholder="Enter the Store Location"
                name="stName"
                textContentType="name"
                mode="outlined"
              />
              <AppFormInput
                autoCapitalize="words"
                autoCorrect={false}
                icon="account"
                label="Supervisor"
                placeholder="Enter the Supervisor's Name"
                name="supName"
                textContentType="name"
                mode="outlined"
              />

              <AppSubmitButton
                color="primary"
                mode="contained"
                icon="check-circle"
                text="Submit"
                style={styles.button}
              />
            </ScrollView>
          </AppForm>
        </View>
      </View>
    </View>
  );
}

export default AppAddStore;

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
