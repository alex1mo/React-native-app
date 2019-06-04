import { Easing, Animated } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import SignUp from "../pages/signup/SignUp.container";
import Main from "../pages/main/Main.container";

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
    initialRouteName: "main",
    defaultNavigationOptions: {
      headerStyle: {
        display: "none"
      }
    }
  }
);

export default createAppContainer(MainStack);

// initialRouteName: (auth && "main") || "signup",
