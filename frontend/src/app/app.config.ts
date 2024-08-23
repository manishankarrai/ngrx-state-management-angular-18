import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideStore }  from '@ngrx/store';
import { provideEffects }  from '@ngrx/effects';
import { provideStoreDevtools }  from '@ngrx/store-devtools';
import { incrementReducer } from './store/reducer/increment.reducer';
import { groceryReducer } from './store/reducer/grocery.reducer';
import { bucketReducer } from './store/reducer/bucket.reducer';
import { provideHttpClient } from '@angular/common/http';
import { MoviesEffects } from './store/effects/grocery.effects';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes) ,
     provideHttpClient() ,
     provideStore({
        increment: incrementReducer  , 
        groceries: groceryReducer ,
        bucket : bucketReducer
     }) , 
     provideEffects( MoviesEffects ) , 
     provideStoreDevtools({ 
        maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: true, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone})
    
     })
    ]
};
