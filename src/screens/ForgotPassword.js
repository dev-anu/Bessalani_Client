import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Image, Input, Icon, Button, Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Styles from "../theme/Styles";
import Colors from "../theme/Colors";

const ForgotPassword = ({ navigation }) => {
  const [inputElem, setInputElem] = useState("");
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={Styles.appContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView>
          <View style={Styles.forgotpswd.container}>
            <Image
              source={require("../assets/images/forgotpassword.png")}
              style={Styles.forgotpswd.logo}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={Styles.bgtransparent}
            />
            <Text style={Styles.forgotpswd.subtitle}>
              Enter your email address below to reset password
            </Text>
            <KeyboardAvoidingView style={Styles.login.forgroundSpace}>
              <Input
                placeholder="Email"
                leftIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={
                      inputElem === "email" ? Colors.lightBlue : Colors.greyOut
                    }
                    type="fontisto"
                    name="email"
                  />
                }
                onFocus={() => setInputElem("email")}
                onBlur={() => setInputElem("")}
                onChangeText={(email) => setEmail(email)}
                inputContainerStyle={{
                  borderColor:
                    inputElem === "email" ? Colors.lightBlue : "white",
                  margin: 5,
                  borderWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              />
            </KeyboardAvoidingView>
            <Button
              buttonStyle={Styles.forgotpswd.resetBtn}
              titleStyle={Styles.login.loginText}
              title="RESET PASSWORD"
            //   disabled={!email}
              onPress={() => navigation.navigate('verifyotp')}
            />
            <View style={Styles.login.signupRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={Styles.login.link}> Back To Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ForgotPassword;
