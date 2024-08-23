import { createReducer , on } from "@ngrx/store";
import { increment , decrement , reset  } from '../action/increment.action';


const initialState : number = 0;


export const incrementReducer =  createReducer(
    initialState , 
    on(increment , (state)=> {

       return state + 1 ;
    }) ,
    on(decrement , (state)=> {

        return state - 1 ;
     }) ,
     on(reset , (state)=> {

        return 0 ;
     }) ,

);   