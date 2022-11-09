import { configureStore } from '@reduxjs/toolkit';
import { marketApi } from './api/market';

export const store = configureStore({
  reducer: {
    [marketApi.reducerPath]: marketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      // authApi.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
