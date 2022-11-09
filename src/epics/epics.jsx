import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { servicesRequest, servicesSusccess, servicesFailure } from '../reducers/reducerServices';
import { servicesIdRequest, servicesIdSusccess, servicesIdFailure } from '../reducers/reducerServicesId';


export const servicesEpic = action$ => action$.pipe(
  ofType(servicesRequest.type),
  mergeMap(() =>
    ajax.getJSON(process.env.REACT_APP_SERVICES).pipe(
      map((response) => servicesSusccess(response)),
      catchError((e) => of(servicesFailure(e.message)))
    )
  )
);

export const servicesIdEpic = action$ => action$.pipe(
  ofType(servicesIdRequest.type),
  mergeMap((action) =>
    ajax.getJSON(`${process.env.REACT_APP_SERVICES}/${action.payload}`).pipe(
      map((response) => servicesIdSusccess(response)),
      catchError((e) => of(servicesIdFailure(e.message)))
    )
  )
);