import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { combineReducers, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reducerServices from '../reducers/reducerServices';
import reducerServicesId from '../reducers/reducerServicesId';
import { servicesEpic, servicesIdEpic } from '../epics/epics';

const reducer = combineReducers({
  reducerServices: reducerServices,
  reducerServicesId: reducerServicesId
});

const epic = combineEpics(
  servicesEpic,
  servicesIdEpic
);

const epicMiddleware = createEpicMiddleware();

const store =  configureStore({
  reducer: reducer,
  middleware: [epicMiddleware, thunk]
});


epicMiddleware.run(epic);

export default store;