import { combineReducers, configureStore } from "@reduxjs/toolkit";
import zkRecordReducer from "./zkRecord/reducer";
import usersReducer from "./users/reducer";
import initialDataReducer from "./initialData/reducer";
import storageSession from "redux-persist/lib/storage/session";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  zkRecord: zkRecordReducer,
  users: usersReducer,
  initialData: initialDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export const persistor = persistStore(store);
