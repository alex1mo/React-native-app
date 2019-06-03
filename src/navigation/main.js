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
    initialRouteName: "signup",
    defaultNavigationOptions: {
      headerStyle: {
        display: "none"
      }
    }
  }
);

export default createAppContainer(MainStack);

// initialRouteName: (auth && "main") || "signup",
