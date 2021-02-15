import React, { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Accordion from "react-native-collapsible/Accordion";
import RNPickerSelect from "react-native-picker-select";
import AppHeader from "../components/Header";
import Colors from "../theme/Colors";
import Styles from "../theme/Styles";
import i18n from "i18n-js";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../actions";

const Settings = ({ navigation }) => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [activeSection, setActiveSection] = useState([]);
  useEffect(() => {
    if (lang) {
      i18n.locale = lang;
      setDisplay(!display);
    }
  }, [lang]);
  const SECTIONS = [
    {
      icon: "language",
      iconColor: Colors.slider3color,
      title: i18n.t("language"),
    },
    {
      icon: "help-outline",
      iconColor: Colors.slider2color,
      title: i18n.t("about"),
      content: "Lorem ipsum...",
    },
  ];
  const renderHeader = (section) => {
    return (
      <View style={Styles.settings.accordion.header}>
        <View style={Styles.flexRow}>
          <Icon
            color={section.iconColor}
            name={section.icon}
            style={Styles.settings.accordion.icon}
          />
          <Text style={Styles.settings.accordion.label}>{section.title}</Text>
        </View>
        <Icon
          color={Colors.greyOut}
          type="material-icons"
          name="arrow-forward-ios"
        />
      </View>
    );
  };
  const renderContent = (section) => {
    if (section.icon === "language") {
      return (
        <RNPickerSelect
          onValueChange={(value) => {
            dispatch(setLang(value));
            AsyncStorage.setItem("@AppLang", JSON.stringify(value));
          }}
          placeholder={{}}
          value={lang}
          items={[
            { label: "English", value: "en" },
            { label: "Hindi", value: "hi" },
          ]}
          style={Styles.settings.picker}
          Icon={() => {
            return <View style={Styles.settings.pickerIcon} />;
          }}
        />
      );
    } else {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ textAlign: "center" }}>{section.content}</Text>
        </View>
      );
    }
  };
  const updateSections = (activeSection) => {
    setActiveSection(activeSection);
  };
  return (
    <View>
      <AppHeader
        statusBar={true}
        barStyle="light-content"
        barBackgroundColor={Colors.statusBlue}
        backgroundColor={Colors.lightBlue}
        align="center"
        leftComp={
          <Icon
            color="white"
            type="feather"
            name="arrow-left"
            onPress={() => navigation.goBack()}
          />
        }
        leftContainerStyle={{ paddingLeft: 10 }}
        centerComp={
          <Text style={{ fontSize: 20, color: "white", marginTop: -3 }}>
            {i18n.t("settings")}
          </Text>
        }
      ></AppHeader>
      <KeyboardAwareScrollView style={Styles.drawerBackground}>
        <View style={Styles.settings.container}>
          <Accordion
            sections={SECTIONS}
            activeSections={activeSection}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={updateSections}
            containerStyle={{ width: "100%" }}
            touchableComponent={TouchableWithoutFeedback}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Settings;
