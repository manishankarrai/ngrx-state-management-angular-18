import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';
import { getAllGrocery  , updateGrocery} from '../action/grocery.action';

@Injectable()
export class MoviesEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(getAllGrocery),
    exhaustMap(() => this.commonService.getAll()
      .pipe(
        map((grocery: any )=> (updateGrocery({ payload: grocery }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private commonService: CommonService
  ) {}
}