import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Yup from "yup";

import { AppForm, AppFormInput, AppSubmitButton } from "../components/forms";
import AppColors from "../configs/AppColors";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(3).label("Email Address"),
  password: Yup.string().required().min(8).label("Password"),
  fName: Yup.string().required().min(3).label("Full Name"),
  mNumber: Yup.string().required().min(10).label("Mobile Number"),
});

function AppAddEmployee(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter New User Details</Text>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: AppColors.background,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Animatable.View animation="pulse" style={styles.innerFooter}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={null}
            validationSchema={validationSchema}
          >
            <ScrollView>
              <AppFormInput
                autoCapitalize="words"
                autoCorrect={false}
                icon="account"
                label="Full Name"
                placeholder="Enter the Full Name"
                name="fName"
                textContentType="name"
                mode="outlined"
              />

              <AppFormInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                name="email"
                label="Email Address"
                placeholder="Enter the Email Address"
                textContentType="emailAddress"
                mode="outlined"
              />
              <AppFormInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="cellphone-android"
                label="Mobile Number"
                placeholder="Enter the Mobile Number"
                name="mNumber"
                textContentType="telephoneNumber"
                mode="outlined"
                axLength={10}
              />
              <AppFormInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                label="Password"
                placeholder="Enter Your Password"
                name="password"
                secureTextEntry
                textContentType="password"
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
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}

export default AppAddEmployee;

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
