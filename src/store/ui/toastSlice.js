import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { items: [] },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

let nextId = 0;

// dispatch(showToast("Saved")) — shows a toast and removes it after a few seconds
export const showToast =
  (message, type = "success") =>
  (dispatch) => {
    const id = ++nextId;
    dispatch(toastSlice.actions.add({ id, message, type }));
    setTimeout(() => dispatch(toastSlice.actions.remove(id)), 2800);
  };

export const toastActions = toastSlice.actions;
export default toastSlice;
