import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormInput, AppSubmitButton } from "../components/forms";
import AppColors from "../configs/AppColors";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(3).label("Email Address"),
  password: Yup.string().required().min(8).label("Password"),
});

function AppLogin(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: AppColors.background,
          },
        ]}
      >
        <Text style={styles.text}>Welcome!</Text>

        <View animation="pulse" style={styles.innerFooter}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => props.navigation.navigate("DrawerNav")}
            validationSchema={validationSchema}
          >
            <ScrollView>
              <AppFormInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                name="email"
                label="Email Address"
                placeholder="Enter Your Email Address"
                textContentType="emailAddress"
                mode="outlined"
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
                title="login"
                color="primary"
                mode="contained"
                icon="login-variant"
                text="Login"
                style={styles.button}
              />
              <TouchableOpacity>
                <Text style={styles.forget}>Forget Password?</Text>
              </TouchableOpacity>
            </ScrollView>
          </AppForm>
        </View>
      </View>
    </View>
  );
}

export default AppLogin;

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
    flex: 1.25,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: "8%",
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
    color: AppColors.primary,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
