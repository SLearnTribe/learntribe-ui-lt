import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: { firstName: "", lastName: "", id: null, role: "CANDIDATE" },
  },
  reducers: {
    getUserData() {},
    setUserData(state, { payload }) {
      state.userDetails = payload;
    },
  },
});

export const { getUserData, setUserData } = userSlice.actions;

export default userSlice.reducer;
