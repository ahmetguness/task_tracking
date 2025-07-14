import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userType: "parent" | "child" | "guest" | null;
}

const initialState: UserState = {
  userType: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserState["userType"]>) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = UserSlice.actions;
export default UserSlice.reducer;
