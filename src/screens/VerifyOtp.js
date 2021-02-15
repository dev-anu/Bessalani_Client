import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Text, Image, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Styles from "../theme/Styles";

const VerifyOtp = ({ navigation }) => {
  const [code, setCode] = useState("");
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
              source={require("../assets/images/otp.png")}
              style={Styles.forgotpswd.logo}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={Styles.bgtransparent}
            />
            <Text style={Styles.forgotpswd.subtitle}>
              Enter the verification code we just sent on your email address
            </Text>
            <OTPInputView
              style={Styles.verifyOtp.otp}
              codeInputFieldStyle={Styles.verifyOtp.underlineStyle}
              codeInputHighlightStyle={
                Styles.verifyOtp.underlineStyleHighLighted
              }
              onCodeChanged={(code) => {
                setCode({ code });
              }}
              pinCount={4}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <View style={Styles.verifyOtp.otpRow}>
              <Text style={Styles.login.label}> If you don't receive a code? </Text>
              <TouchableOpacity>
                <Text style={Styles.login.link}> Resend </Text>
              </TouchableOpacity>
            </View>
            <Button
              buttonStyle={Styles.forgotpswd.resetBtn}
              titleStyle={Styles.login.loginText}
              title="VERIFY"
            //   disabled={!email}
              onPress={() => navigation.navigate('resetpassword')}
            />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default VerifyOtp;
