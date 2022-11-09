import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: '',
  loading: false,
  error: null,
  id: null
};

export const reducerServicesId = createSlice({
  name: 'reducerServicesId',
  initialState: initialState,
  reducers: {
    servicesIdRequest(state, action) {
      const id = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
        id
      };
    },

    servicesIdSusccess(state, action) {
      const item = action.payload;
      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    },

    servicesIdFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    },

    servicesIdReset() {
      return initialState
    }
}})

export const { servicesIdRequest, servicesIdSusccess, servicesIdFailure, servicesIdReset } = reducerServicesId.actions;
export default reducerServicesId.reducer;