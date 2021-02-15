import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import Colors from "../theme/Colors";
import i18n from "i18n-js";
import { useSelector } from "react-redux";

import AppDrawer from "../components/Drawer";

import TabNavigator from "../navigation/TabNavigator";
import ClientRequest from "../screens/ClientRequest";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const lang = useSelector((state) => state.lang);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (lang) {
      i18n.locale = lang;
      setDisplay(!display);
    }
  }, [lang]);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={isLargeScreen ? "permanent" : "front"}
        drawerStyle={isLargeScreen ? null : { width: "80%" }}
        overlayColor="rgba(0, 0, 0, 0.6)"
        drawerStyle={{
          backgroundColor: "white",
        }}
        drawerContentOptions={{
          activeTintColor: Colors.statusBlue,
          activeBackgroundColor: Colors.drawerBlue,
          inactiveTintColor: Colors.greyOut,
          inactiveBackgroundColor: Colors.backgroundColor,
          labelStyle: {
            fontSize: 16,
            fontWeight: "700",
            marginLeft: -10,
          },
        }}
        drawerContent={(props) => <AppDrawer {...props}></AppDrawer>}
        initialRouteName="home"
      >
        <Drawer.Screen
          name="home"
          component={TabNavigator}
          options={{
            drawerLabel: i18n.t("home"),
            // swipeEnabled: false,
            drawerIcon: ({ focused, size }) => (
              <Icon
                style={{ height: size, width: size }}
                color={focused ? Colors.statusBlue : Colors.greyOut}
                type="ionicon"
                name={focused ? "home" : "home-outline"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="clientrequest"
          component={ClientRequest}
          options={{
            drawerLabel: i18n.t("clientrequest"),
            drawerIcon: ({ focused, size }) => (
              <Icon
                style={{ height: size, width: size }}
                color={focused ? Colors.statusBlue : Colors.greyOut}
                type="ionicon"
                name={focused ? "people" : "people-outline"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          component={Settings}
          options={{
            drawerLabel: i18n.t("settings"),
            drawerIcon: ({ focused, size }) => (
              <Icon
                style={{ height: size, width: size }}
                color={focused ? Colors.statusBlue : Colors.greyOut}
                type="ionicon"
                name={focused ? "settings" : "settings-outline"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
