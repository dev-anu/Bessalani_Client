import React, { memo } from "react";
import { Platform } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = (props) => {
  return (
    <Header
      placement={props.align}
      statusBarProps={{
        barStyle: props.barStyle,
        backgroundColor: props.barBackgroundColor,
        hidden: !props.statusBar,
      }}
      leftComponent={props.leftComp}
      leftContainerStyle={props.leftContainerStyle}
      centerComponent={props.centerComp}
      centerContainerStyle={props.centerContainerStyle}
      rightComponent={props.rightComp}
      rightContainerStyle={props.rightContainerStyle}
      containerStyle={{
        backgroundColor: props.backgroundColor,
        height: Platform.OS == "ios" ? 70 : 90,
      }}
    />
  );
};

export default memo(AppHeader);
