import { createAction, props } from "@ngrx/store";




export const storeBucket =  createAction('[Bucket] store' , props<{ _id: any; name: string; price: number }>());
export const removeBucket =  createAction('[Bucket] remove' , props<{ _id: any; name: string; price: number }>());

