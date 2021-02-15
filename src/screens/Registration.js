import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Styles from "../theme/Styles";
import Colors from "../theme/Colors";

const Registration = ({ navigation }) => {
  const [inputElem, setInputElem] = useState("");
  const [passwdVisible, setPasswdVisible] = useState(false);
  const [confPasswdVisible, setConfPasswdVisible] = useState(false);
  let emailTextInput = useRef();
  let phoneTextInput = useRef();
  let passwordTextInput = useRef();
  let confpasswordTextInput = useRef();
  return (
    <SafeAreaView style={Styles.appContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView>
          <View style={Styles.register.container}>
            <Text h4 style={Styles.register.title}>
              Let's Get Started!
            </Text>
            <Text style={Styles.login.subtitle}>Create an account</Text>
            <KeyboardAvoidingView
              style={Styles.login.forgroundSpace}
            >
              <Input
                placeholder="Username"
                leftIcon={
                  <Icon
                    style={Styles.login.inputIcon}
                    color={
                      inputElem === "username"
                        ? Colors.lightBlue
                        : Colors.greyOut
                    }
                    type="feather"
                    name="user"
                  />
                }
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailTextInput.focus();
                }}
                blurOnSubmit={false}
                onFocus={() => setInputElem("username")}
                onBlur={() => setInputElem("")}
                // onChangeText={(username) => this.setState({username})}
                inputContainerStyle={{
                  borderColor:
                    inputElem === "username" ? Colors.lightBlue : "white",
                  margin: 5,
                  borderWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              />
              <Input
                ref={(input) => {
                  emailTextInput = input;
                }}
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  phoneTextInput.focus();
                }}
                blurOnSubmit={false}
                onFocus={() => setInputElem("email")}
                onBlur={() => setInputElem("")}
                // onChangeText={(username) => this.setState({username})}
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
              <Input
                ref={(input) => {
                  phoneTextInput = input;
                }}
                placeholder="Phone"
                leftIcon={
                  <Icon
                    style={
                      (Styles.login.inputIcon,
                      { paddingLeft: 10, paddingRight: 10 })
                    }
                    color={
                      inputElem === "phone" ? Colors.lightBlue : Colors.greyOut
                    }
                    type="fontisto"
                    name="mobile-alt"
                  />
                }
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordTextInput.focus();
                }}
                blurOnSubmit={false}
                onFocus={() => setInputElem("phone")}
                onBlur={() => setInputElem("")}
                // onChangeText={(username) => this.setState({username})}
                inputContainerStyle={{
                  borderColor:
                    inputElem === "phone" ? Colors.lightBlue : "white",
                  margin: 5,
                  borderWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                }}
              />
              <Input
                ref={(input) => {
                  passwordTextInput = input;
                }}
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
              buttonStyle={Styles.register.registerBtn}
              titleStyle={Styles.login.loginText}
              title="CREATE"
            />
            <View style={Styles.login.signupRow}>
              <Text style={Styles.login.label}> Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={Styles.login.link}> Login here </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Registration;
