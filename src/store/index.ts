import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./slices/songSlice";
import rootSaga from "../saga";

export default function configureMainStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
        listSongs:rootReducer
    },
    middleware: [sagaMiddleware, logger]

  });
  sagaMiddleware.run(rootSaga);
  return { store };
}