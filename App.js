import "react-native-gesture-handler";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppIntroSlider from "./src/screens/AppIntroSlider";
import StackNavigator from "./src/navigation/StackNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./src/assets/i18n/en.json";
import hi from "./src/assets/i18n/hi.json";
import Reducers from "./src/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(Reducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: true,
      loggedIn: true,
      lang: "en",
    };
    i18n.translations = {
      en: en,
      hi: hi,
    };
    i18n.locale = Localization.locale ? Localization.locale : "en";
    i18n.fallbacks = true;
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("@AppIntro");
      if (value !== null) {
        this.setState({ showRealApp: true });
      } else {
        this.setState({ showRealApp: false });
      }
    } catch (e) {}
  }

  onDone = async () => {
    try {
      await AsyncStorage.setItem("@AppIntro", JSON.stringify(true));
      this.setState({ showRealApp: true });
    } catch (e) {}
  };

  render() {
    if (this.state.showRealApp) {
      if (this.state.loggedIn) {
        return (
          <Provider store={store}>
            <DrawerNavigator></DrawerNavigator>
          </Provider>
        );
      } else {
        return <StackNavigator></StackNavigator>;
      }
    } else {
      return <AppIntroSlider onDone={this.onDone} onSkip={this.onDone} />;
    }
  }
}
