import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";

export const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState: INITIAL_STATE.contacts,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      }).addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const updatedContactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (updatedContactIndex !== -1) {
          state.items[updatedContactIndex] = action.payload;
        }
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
