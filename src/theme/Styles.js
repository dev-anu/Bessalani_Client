import { Platform,Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "./Colors";

const {height,width}= Dimensions.get("window");
const Styles = {
  appContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  bgtransparent: {
    backgroundColor: "transparent",
  },
  tabBackground: {
    backgroundColor: Colors.backgroundColor,
    height: "90%",
  },
  drawerBackground: {
    backgroundColor: Colors.backgroundColor,
    height: hp("90%"),
  },
  flexRow: {
    flexDirection: "row",
  },
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  animation: {
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
  },
  slides:{
    position:"relative",
    height:height
  },
  slider: {
    sliderTitle: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      position:"absolute",
      zIndex:2,
      top:30
    },
    sliderImage: {
      width: "100%",
      height: height,
      resizeMode: "cover",
      position:"absolute",
      top:0
    },
    sliderText: {
      fontSize: 22,
      color: "white",
      position:"relative",
      top:"40%"
    },
  },
  login: {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: wp("70%"),
      resizeMode: "contain",
      height: hp("30%"),
    },
    title: {
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: RFPercentage(2.1),
    },
    forgroundSpace: {
      alignSelf: "stretch",
      paddingTop: hp("3%"),
    },
    inputIcon: {
      margin: 7,
    },
    forgotView: {
      alignSelf: "stretch",
      alignItems: "flex-end",
      marginRight: 20,
    },
    forgotText: {
      fontSize: RFPercentage(2.2),
      fontWeight: "500",
    },
    loginBtn: {
      width: wp("90%"),
      borderRadius: 20,
      backgroundColor: Colors.lightBlue,
      alignSelf: "center",
      margin: wp("4%"),
    },
    loginText: {
      fontSize: RFPercentage(2.5),
      fontWeight: "bold",
    },
    row: {
      alignSelf: "center",
      flexDirection: "row",
    },
    signupRow: {
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: 15,
    },
    label: {
      fontSize: RFPercentage(2.2),
      color: "black",
    },
    sublabel: {
      fontSize: RFPercentage(2.2),
      color: Colors.greyOut,
    },
    link: {
      fontSize: RFPercentage(2.2),
      fontWeight: "bold",
      color: Colors.lightBlue,
    },
    socialView: {
      flexDirection: "row",
      paddingLeft: wp("4%"),
      paddingRight: wp("4%"),
      paddingBottom: wp("1%"),
      paddingTop: wp("1%"),
    },
    socialText: {
      fontSize: RFPercentage(2.3),
    },
  },
  register: {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // height: hp("95%"),
    },
    forgroundSpace: {
      alignSelf: "stretch",
    },
    title: {
      fontWeight: "bold",
      paddingTop: hp("5%"),
    },
    registerBtn: {
      width: wp("90%"),
      borderRadius: 20,
      backgroundColor: Colors.lightBlue,
      alignSelf: "center",
      marginBottom: wp("4%"),
    },
  },
  forgotpswd: {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // height: hp("95%"),
    },
    logo: {
      width: wp("80%"),
      resizeMode: "contain",
      height: hp("35%"),
    },
    subtitle: {
      textAlign: "center",
      fontSize: RFPercentage(2.5),
      color: Colors.greyOut,
      width: wp("80%"),
    },
    resetBtn: {
      width: wp("90%"),
      borderRadius: 20,
      backgroundColor: Colors.lightBlue,
      alignSelf: "center",
      marginBottom: wp("4%"),
    },
  },
  verifyOtp: {
    otp: {
      width: wp("60%"),
      height: 70,
    },
    underlineStyle: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 2,
      color: "black",
    },
    underlineStyleHighLighted: {
      borderColor: Colors.lightBlue,
    },
    otpRow: {
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: 20,
      marginTop: 15,
    },
  },
  drawer: {
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      // marginLeft: -10,
    },
    avatarContainer: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      resizeMode: "cover",
      paddingTop: Platform.OS == "ios" ? 25 : 45,
      height: hp("25%"),
    },
    profileImg: {
      backgroundColor: Colors.drawerProfile,
    },
    profileText: {
      marginTop: 5,
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
    },
    divider: {
      height: 1,
      backgroundColor: Colors.drawerProfile,
    },
  },
  dashboard: {
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 50,
    },
  },
  settings: {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    accordion: {
      header: {
        flexDirection: "row",
        borderBottomColor: Colors.greyOut,
        borderBottomWidth: 0.3,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      },
      icon: {
        marginRight: 15,
        marginTop: 2,
      },
      label: {
        fontSize: 20,
        fontWeight: "500",
      },
    },
    picker: {
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: "black",
        paddingRight: 30,
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: "black",
        paddingRight: 30,
      },
      iconContainer: {
        top: 20,
        right: 10,
      },
    },
    pickerIcon: {
      backgroundColor: "transparent",
      borderTopWidth: 10,
      borderTopColor: Colors.greyOut,
      borderRightWidth: 10,
      borderRightColor: "transparent",
      borderLeftWidth: 10,
      borderLeftColor: "transparent",
    },
  },
  card: {
    card: {
      width: "85%",
      marginBottom: 10,
    },
    container: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
    },
    textContainer: {
      marginLeft: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      flex: 1,
    },
    subtextContainer: {
      marginLeft: 20,
      marginTop: -10,
      alignItems: "flex-start",
    },
    cardTitle: {
      fontSize: RFPercentage(2.3),
    },
    cardText: {
      fontSize: RFPercentage(2.1),
    },
    bold: {
      fontWeight: "bold",
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 10,
      marginBottom: -16,
      marginLeft: -16,
      marginRight: -16,
    },
    rejectBtn: {
      backgroundColor: Colors.redColor,
      borderRadius: 0,
    },
    rejectText: {
      fontSize: RFPercentage(2.5),
      fontWeight: "600",
    },
    acceptBtn: {
      backgroundColor: Colors.greenColor,
      borderRadius: 0,
    },
    acceptText: {
      fontSize: RFPercentage(2.5),
      fontWeight: "600",
    },
  },
};

export default Styles;
