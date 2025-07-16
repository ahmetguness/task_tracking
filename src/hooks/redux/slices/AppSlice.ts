import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Türkçe, İngilizce, Endonezce, Japonca, Tayca, Malayca

interface AppState {
  appLanguage: "tr" | "en" | "id" | "ja" | "th" | "ms";
}
const initialState: AppState = {
  appLanguage: "en",
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<AppState["appLanguage"]>) => {
      state.appLanguage = action.payload;
    },
  },
});

export default AppSlice.reducer;
export const { setAppLanguage } = AppSlice.actions;
