import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import AppSlice from "./slices/AppSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    app: AppSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
