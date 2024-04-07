import { createSlice } from "@reduxjs/toolkit";

const changeFilter = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },

  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = changeFilter.actions;

export const changeFilterReducer = changeFilter.reducer;

export const selectNameFilter = (state) => state.filters.name;
