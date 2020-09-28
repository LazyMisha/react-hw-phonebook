import { createReducer, combineReducers } from "@reduxjs/toolkit";
import types from "./contactsTypes";

const initialState = {
  contacts: {
    items: [],
    filters: "",
  },
};

const handleAddContact = (items, { payload }) => [...items, payload.item];
const handleDeleteContact = (items, { payload }) =>
  items.filter((item) => item.id !== payload.item.id);
const handleFilter = (_, { payload }) => payload.filter.text;

const itemsReducer = createReducer(initialState.contacts.items, {
  [types.ADD]: handleAddContact,
  [types.DELETE]: handleDeleteContact,
});

const filterReducer = createReducer(initialState.contacts.filters, {
  [types.FILTER]: handleFilter,
});

export default combineReducers({
  items: itemsReducer,
  filters: filterReducer,
});
