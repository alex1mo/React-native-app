import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import SignUp from "./src/pages/signup/SignUp.container";
import Main from "./src/pages/main/Main.container";
import MainStack from "./src/navigation/main";

import rootReducer from "./src/reducer";
import rootSaga from "./src/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}
