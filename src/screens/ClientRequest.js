import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppHeader from "../components/Header";
import AppCard from "../components/Card";
import AppCardClientRequest from "../components/CardClientRequest";
import Colors from "../theme/Colors";
import Styles from "../theme/Styles";
import i18n from "i18n-js";
import { useSelector } from "react-redux";

const ClientRequest = ({ navigation }) => {
  const lang = useSelector((state) => state.lang);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (lang) {
      i18n.locale = lang;
      setDisplay(!display);
    }
  }, [lang]);
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
            {i18n.t("clientrequest")}
          </Text>
        }
      ></AppHeader>
      <KeyboardAwareScrollView style={Styles.tabBackground}>
        <View style={Styles.dashboard.container}>
          <AppCard animation="bounceIn">
            <AppCardClientRequest
              rating={4}
              name="Arjun Khetia"
              time="05:00 to 07:30 PM"
              place="BTM Layout, Banalore, India."
            ></AppCardClientRequest>
          </AppCard>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ClientRequest;
