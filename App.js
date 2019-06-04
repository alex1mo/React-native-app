import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import MainStack from "./src/navigation/main";

import rootReducer from "./src/reducer";
import rootSaga from "./src/sagas";
import utils from "./src/utils/utils.all";
import add from "./src/action-creator/add";
import profile from "./src/action-creator/profile";
import signup from "./src/action-creator/signup";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

store.dispatch(signup.loading());

utils
  .retrieveData("list")
  .then(res => res && store.dispatch(add.fetchList(res)));
utils
  .retrieveData("profile")
  .then(res => res && store.dispatch(profile.getUserData(res)));
utils.retrieveData("auth").then(res => {
  if (res) {
    return store.dispatch(signup.auth(res));
  }
});

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}

export default App;
