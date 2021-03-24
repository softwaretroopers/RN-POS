import React from "react";
import { HelperText } from "react-native-paper";

function AppErrorMessage({ error, visible, style }) {
  if (!visible || !error) return null;

  return (
    <HelperText style={style} type="error" visible={visible}>
      {error}
    </HelperText>
  );
}

export default AppErrorMessage;
