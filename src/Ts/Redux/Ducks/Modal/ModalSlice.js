import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "postJobs",
  initialState: {
    currentModal: null,
  },
  reducers: {
    setCurrentModal(state, { payload }) {
      state.currentModal = payload;
    },
  },
});

export const { setCurrentModal } = modalSlice.actions;

export default modalSlice.reducer;
