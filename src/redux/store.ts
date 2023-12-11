import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;

