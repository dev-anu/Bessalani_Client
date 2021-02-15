import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppIntro from "rn-app-intro-screen";
import Colors from "../theme/Colors";
import Styles from "../theme/Styles";

const slides = [
  {
    key: "slider-1",
    title: "Relaxing",
    titleStyle: Styles.slider.sliderTitle,
    text: "Description.\nSay something cool",
    textStyle: Styles.slider.sliderText,
    image: require("../assets/images/intro-1.jpeg"),
    imageStyle: Styles.slider.sliderImage,
    backgroundColor: Colors.slider1color,
  },
  {
    key: "slider-2",
    title: "Funky",
    titleStyle: Styles.slider.sliderTitle,
    text: "Other cool stuff",
    textStyle: Styles.slider.sliderText,
    image: require("../assets/images/intro-2.jpeg"),
    imageStyle: Styles.slider.sliderImage,
    backgroundColor: Colors.slider2color,
  },
  {
    key: "slider-3",
    title: "Playfull",
    titleStyle: Styles.slider.sliderTitle,
    text: "I'm already out of descriptions\n Lorem ipsum bla bla bla",
    textStyle: Styles.slider.sliderText,
    image: require("../assets/images/intro-3.jpeg"),
    imageStyle: Styles.slider.sliderImage,
    backgroundColor: Colors.slider3color,
  },
];

export default class AppIntroSlider extends React.Component {
  render() {
    return <View style={Styles.appContainer}>
      <AppIntro
        slides={slides}
        className={Styles.slides}
        showSkipButton
        onSkip={this.props.onSkip}
        onDone={this.props.onDone}
      />
    </View>;
  }
}
