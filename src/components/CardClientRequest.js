import React from "react";
import { View } from "react-native";
import { Avatar, Card, Rating, Text, Button, Icon } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../theme/Colors";
import Styles from "../theme/Styles";

function AppCardClientRequest(props) {
  return (
    <View>
      <View style={Styles.card.container}>
        <View style={{ justifyContent: "center" }}>
          <Avatar
            rounded
            size={RFPercentage(8)}
            activeOpacity={0.7}
            containerStyle={Styles.drawer.profileImg}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <View style={(Styles.flexColumn, { flex: 1 })}>
          <View style={Styles.card.textContainer}>
            <Card.Title style={Styles.card.cardTitle}>{props.name}</Card.Title>
            <Rating
              imageSize={RFPercentage(2.3)}
              readonly
              startingValue={props.rating}
              type="custom"
              ratingColor={Colors.statusBlue}
              ratingBackgroundColor={Colors.inactive}
              tintColor="white"
            />
          </View>
          <View style={Styles.card.subtextContainer}>
            <Text style={Styles.card.cardText}>
              <Text style={Styles.card.bold}>Time - </Text>
              {props.time}
            </Text>
            <Text style={Styles.card.cardText}>
              <Text style={Styles.card.bold}>Place - </Text>
              {props.place}
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.card.buttonContainer}>
        <View style={{ flex: 1 }}>
          <Button
            title="Reject"
            icon={
              <Icon
                name="cross"
                type='entypo'
                size={20}
                color="white"
              />
            }
            containerStyle={{ borderRadius: 0 }}
            buttonStyle={Styles.card.rejectBtn}
            titleStyle={Styles.card.rejectText}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Accept"
            icon={
              <Icon
                name="check"
                type='entypo'
                size={20}
                color="white"
              />
            }
            containerStyle={{ borderRadius: 0 }}
            buttonStyle={Styles.card.acceptBtn}
            titleStyle={Styles.card.acceptText}
          />
        </View>
      </View>
    </View>
  );
}

export default AppCardClientRequest;
