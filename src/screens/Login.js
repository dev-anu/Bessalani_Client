import React, { useState, useRef } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  Image,
  Text,
  Input,
  Icon,
  Button,
  SocialIcon,
} from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Styles from "../theme/Styles";
import Colors from "../theme/Colors";

const Login = ({ navigation }) => {
  const [inputElem, setInputElem] = useState("");
  const [passwdVisible, setPasswdVisible] = useState(false);
  let passwordTextInput = useRef();
  return (
    <SafeAreaView style={Styles.appContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView>
          <View style={Styles.login.container}>
            <Image
              source={require("../assets/images/logo.png")}
              style={Styles.login.logo}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={Styles.bgtransparent}
            />
            <Text h4 style={Styles.login.title}>
              Welcome
            </Text>
            <Text style={Styles.login.subtitle}>
              Log in to your existant account
            </Text>
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
                  passwordTextInput.focus();
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
            </KeyboardAvoidingView>
            <View style={Styles.login.forgotView}>
              <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
                <Text style={Styles.login.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <Button
              buttonStyle={Styles.login.loginBtn}
              titleStyle={Styles.login.loginText}
              title="LOG IN"
            />
            <View style={Styles.login.row}>
              <Text style={Styles.login.sublabel}> Or connect using </Text>
            </View>
            <View style={Styles.login.socialView}>
              <TouchableOpacity style={Styles.flex}>
                <SocialIcon
                  title="Facebook"
                  button
                  type="facebook"
                  fontStyle={Styles.login.socialText}
                />
              </TouchableOpacity>
              <TouchableOpacity style={Styles.flex}>
                <SocialIcon
                  title="Google"
                  button
                  type="google"
                  fontStyle={Styles.login.socialText}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.login.signupRow}>
              <Text style={Styles.login.label}> Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('registration')}>
                <Text style={Styles.login.link}> Sign up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
