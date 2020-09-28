import { createAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import types from "./contactsTypes";

export const onAddContact = createAction(types.ADD, (name, number) => ({
  payload: {
    item: {
      id: uuid(),
      name,
      number,
    },
  },
}));

export const onDeleteContact = createAction(types.DELETE, (id) => ({
  payload: {
    item: {
      id,
    },
  },
}));

export const onFilterContact = createAction(types.FILTER, (text) => ({
  payload: {
    filter: {
      text,
    },
  },
}));
