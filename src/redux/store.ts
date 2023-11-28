import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const configureStore = () => {
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(reducers, compose);
  sagaMiddleware.run(rootSaga);
  return store;
};
export const store = configureStore();
