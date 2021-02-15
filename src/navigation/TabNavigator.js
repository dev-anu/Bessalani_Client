import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../theme/Colors";
import i18n from "i18n-js";
import { useSelector } from "react-redux";

import Dashboard from "../screens/Dashboard";
import Services from "../screens/Services";
import WorkHistory from "../screens/WorkHistory";
import Payments from "../screens/Payments";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const lang = useSelector((state) => state.lang);
  const [display, setDisplay] = useState(false);
  const [orientation, setOrientation] = useState("PORTRAIT");
  useEffect(() => {
    if (lang) {
      i18n.locale = lang;
      setDisplay(!display);
    }
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation("PORTRAIT");
      } else {
        setOrientation("LANDSCAPE");
      }
    });
  }, [lang]);
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      tabBarOptions={{
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                fontWeight: "700",
                color: focused ? Colors.lightBlue : Colors.greyOut,
                marginLeft: orientation === "LANDSCAPE" ? 20 : 0,
              }}
            >
              {i18n.t("dashboard")}
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              color={focused ? Colors.lightBlue : Colors.greyOut}
              type="ionicon"
              name={focused ? "grid" : "grid-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="services"
        component={Services}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                fontWeight: "700",
                color: focused ? Colors.lightBlue : Colors.greyOut,
                marginLeft: orientation === "LANDSCAPE" ? 20 : 0,
              }}
            >
              {i18n.t("services")}
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              color={focused ? Colors.lightBlue : Colors.greyOut}
              type="material-icons"
              name={focused ? "work" : "work-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="workhistory"
        component={WorkHistory}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                fontWeight: "700",
                color: focused ? Colors.lightBlue : Colors.greyOut,
                marginLeft: orientation === "LANDSCAPE" ? 20 : 0,
              }}
            >
              {i18n.t("workhistory")}
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              color={focused ? Colors.lightBlue : Colors.greyOut}
              type="material-community"
              name="timetable"
            />
          ),
        }}
      />
      <Tab.Screen
        name="payments"
        component={Payments}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                fontWeight: "700",
                color: focused ? Colors.lightBlue : Colors.greyOut,
                marginLeft: orientation === "LANDSCAPE" ? 20 : 0,
              }}
            >
              {i18n.t("payments")}
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              color={focused ? Colors.lightBlue : Colors.greyOut}
              type="font-awesome"
              name="dollar"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
