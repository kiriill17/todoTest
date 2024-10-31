import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  cssModal: 'modal close',
  inputOne: '',
  inputTwo: '',
  arr: [],
  id: 0,
  object: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = true;
      if ((state.value = false)) {
        state.cssModal = 'modal close';
      } else if ((state.value = true)) {
        state.cssModal = 'modal';
      }
    },
    decrement(state) {
      state.value = false;
      if (state.value === false) {
        state.cssModal = 'modal close';
      } else if (state.value === true) {
        state.cssModal = 'modal';
      }
    },
    addInpOneValue: (state, action) => {
      state.inputOne = action.payload;
    },
    addInpTwoValue: (state, action) => {
      state.inputTwo = action.payload;
    },
    addTask: (state, action) => {
      state.object = action.payload;
      state.arr.push(state.object);
    },
    clearTask(state) {
      state.arr = [];
    },
    setID(state) {
      state.id = state.id + 1;
    },
    remove(state, action) {
      state.arr = state.arr.filter((obj) => obj.idd !== action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  addInpOneValue,
  addInpTwoValue,
  addTask,
  clearTask,
  getTask,
  setID,
  remove,
} = counterSlice.actions;

export default counterSlice.reducer;
