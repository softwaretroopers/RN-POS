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
  sName: Yup.string().required().min(3).label("Shop Name"),
  oName: Yup.string().required().min(3).label("Owner's Name"),
});

function AppAddShop(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter New Shop Details</Text>
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
                icon="office-building"
                label="Shop Name"
                placeholder="Enter the Shop Name"
                name="sName"
                textContentType="name"
                mode="outlined"
              />
              <AppFormInput
                autoCapitalize="words"
                autoCorrect={false}
                icon="account"
                label="Owner"
                placeholder="Enter the Owner's Name"
                name="oName"
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
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}

export default AppAddShop;

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
