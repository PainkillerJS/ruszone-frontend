import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { storage } from './configs/storage';
import { userSlice } from './user/slice';

const persistConfig = {
  key: 'ruszone',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof rootReducer>;
