import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./src/reducer";
import rootSaga from "./src/sagas";
import SignUpContainer from "./src/pages/signup/SignUp.container";
import MainContainer from "./src/pages/main/Main.container";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}
