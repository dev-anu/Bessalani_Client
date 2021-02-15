import React, { useState, useRef } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Text, Image, Button, Icon, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Styles from "../theme/Styles";
import Colors from "../theme/Colors";

const ResetPassword = ({ navigation }) => {
  const [inputElem, setInputElem] = useState("");
  const [passwdVisible, setPasswdVisible] = useState(false);
  const [confPasswdVisible, setConfPasswdVisible] = useState(false);
  let confpasswordTextInput = useRef();
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
              source={require("../assets/images/resetpassword.png")}
              style={Styles.forgotpswd.logo}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={Styles.bgtransparent}
            />
            <Text style={Styles.forgotpswd.subtitle}>
              Set the new password for your account
            </Text>
            <KeyboardAvoidingView style={Styles.login.forgroundSpace}>
              <Input
                placeholder="Password"
                leftIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={
                      inputElem === "password"
                        ? Colors.lightBlue
                        : Colors.greyOut
                    }
                    type="feather"
                    name="lock"
                  />
                }
                rightIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={Colors.greyOut}
                    type="feather"
                    name={passwdVisible ? "eye" : "eye-off"}
                    onPress={() => setPasswdVisible(!passwdVisible)}
                  />
                }
                secureTextEntry={passwdVisible ? false : true}
                returnKeyType="next"
                onSubmitEditing={() => {
                  confpasswordTextInput.focus();
                }}
                blurOnSubmit={false}
                secureTextEntry={true}
                onFocus={() => setInputElem("password")}
                onBlur={() => setInputElem("")}
                // onChangeText={(username) => this.setState({username})}
                inputContainerStyle={{
                  borderColor:
                    inputElem === "password" ? Colors.lightBlue : "white",
                  margin: 5,
                  borderWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              />
              <Input
                ref={(input) => {
                  confpasswordTextInput = input;
                }}
                placeholder="Confirm Password"
                leftIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={
                      inputElem === "confpassword"
                        ? Colors.lightBlue
                        : Colors.greyOut
                    }
                    type="feather"
                    name="lock"
                  />
                }
                rightIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={Colors.greyOut}
                    type="feather"
                    name={confPasswdVisible ? "eye" : "eye-off"}
                    onPress={() => setConfPasswdVisible(!confPasswdVisible)}
                  />
                }
                secureTextEntry={confPasswdVisible ? false : true}
                secureTextEntry={true}
                onFocus={() => setInputElem("confpassword")}
                onBlur={() => setInputElem("")}
                // onChangeText={(username) => this.setState({username})}
                inputContainerStyle={{
                  borderColor:
                    inputElem === "confpassword" ? Colors.lightBlue : "white",
                  margin: 5,
                  borderWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              />
            </KeyboardAvoidingView>
            <Button
              buttonStyle={Styles.login.loginBtn}
              titleStyle={Styles.login.loginText}
              title="RESET PASSWORD"
              //   disabled={!email}
              onPress={() => navigation.navigate("login")}
            />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ResetPassword;
