import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: [],
  },
  reducers: {
    add(state, action) {
      state.array.push(action.payload);
    },
    remove(state, action) {
      return {
        array: state.array.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export default contactsSlice;
