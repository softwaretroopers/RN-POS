import React from "react";
import { useFormikContext } from "formik";
import { TextInput } from "react-native-paper";

import AppErrorMessage from "./AppErrorMessage";

function AppFormInput({ name, icon, placeholder, mode, label, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        mode={mode}
        {...otherProps}
        label={label}
        placeholder={placeholder}
        left={<TextInput.Icon name={icon} />}
        style={{ marginBottom: "3%" }}
      />
      <AppErrorMessage
        error={errors[name]}
        visible={touched[name]}
        style={{ marginTop: "-3%" }}
      />
    </>
  );
}

export default AppFormInput;
