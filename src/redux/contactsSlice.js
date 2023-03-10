import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(({ name }) => name === action.payload.name)) {
          toast.error(`Name ${action.payload.name} is alredy in contacts!`, {
            position: 'top-right',
          });
          return;
        }

        if (state.find(({ number }) => number === action.payload.number)) {
          toast.error(
            `Number ${action.payload.number} is alredy in contacts!`,
            {
              position: 'top-right',
            }
          );
          return;
        }
        return [...state, action.payload];
      },
      prepare(obj) {
        return {
          payload: {
            id: nanoid(),
            name: obj.name,
            number: obj.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
