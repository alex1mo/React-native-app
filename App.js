import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import MainStack from "./src/navigation/main";

import rootReducer from "./src/reducer";
import rootSaga from "./src/sagas";
import utils from "./src/utils/utils.all";
import add from "./src/action-creator/add";

utils.retrieveData("list").then(res => store.dispatch(add.fetchList(res)));

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
