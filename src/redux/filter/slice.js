import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return action.payload;
    },
  },
});

export const { filter } = filterSlise.actions;
export default filterSlise;
