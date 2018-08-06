import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserActions, UserActionTypes } from './user.actions';

@Injectable()
export class UserEffects {

  @Effect()
  effect$ = this.actions$.ofType(UserActionTypes.LoadUsers);

  constructor(private actions$: Actions) {}
}
