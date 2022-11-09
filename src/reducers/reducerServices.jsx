import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export const reducerServices = createSlice({
  name: 'reducerServices',
  initialState: initialState,
  reducers: {
    servicesRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    servicesSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    servicesFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    },
}})

export const { servicesRequest, servicesSusccess, servicesFailure } = reducerServices.actions;
export default reducerServices.reducer;