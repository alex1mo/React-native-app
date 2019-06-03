import { Easing, Animated } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import SignUp from "../pages/signup/SignUp.container";
import Main from "../pages/main/Main.container";

import utils from "../utils/utils.all";

let auth = utils.retrieveData("auth");

const MainStack = createStackNavigator(
  {
    signup: {
      screen: SignUp,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    main: {
      screen: Main,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: (auth && "main") || "signup",
    defaultNavigationOptions: {
      headerStyle: {
        display: "none"
      }
    }
  }
);

export default createAppContainer(MainStack);
