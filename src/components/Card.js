import React from "react";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Styles from "../theme/Styles";

function AppCard(props) {
  return (
    <Animatable.View
      animation={props.animation}
      easing="ease-out"
      duration={2000}
      style={Styles.animation.container}
    >
      <Card containerStyle={Styles.card.card}>
        {props.children}
      </Card>
    </Animatable.View>
  );
}

export default AppCard;
