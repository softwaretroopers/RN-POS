import React from "react";
import { useFormikContext } from "formik";
import { Button } from "react-native-paper";
import AppColors from "../../configs/AppColors";

function AppSubmitButton({ icon, mode, text, color, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      icon={icon}
      mode={mode}
      onPress={handleSubmit}
      color={AppColors.color}
      {...otherProps}
    >
      {text}
    </Button>
  );
}

export default AppSubmitButton;
