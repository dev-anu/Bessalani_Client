import React from "react";
import { View, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Text, Divider } from "react-native-elements";
import Styles from "../theme/Styles";

function AppDrawer(props) {
  return (
    <View style={Styles.drawer.container}>
      <ImageBackground source={require("../assets/images/drawerbg.png")} style={Styles.drawer.avatarContainer}>
        <Avatar
          rounded
          size={100}
          activeOpacity={0.7}
          containerStyle={Styles.drawer.profileImg}
          source={require("../assets/images/profile.png")}
        />
        <Text style={Styles.drawer.profileText}>
          Consultant
        </Text>
      </ImageBackground>
      <Divider style={Styles.drawer.divider} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem label="New" onPress={() => console.log("new item..")} /> */}
      </DrawerContentScrollView>
    </View>
  );
}

export default AppDrawer;
