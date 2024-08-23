import  { createReducer , on } from '@ngrx/store' ;
import { Bucket, Grocery } from '../../models/common.model';
import {  storeBucket , removeBucket } from '../action/bucket.action';



const initialState : Bucket[] = [];

export const bucketReducer =  createReducer(
    initialState , 
 
   on(storeBucket , (state , action )=>{
           
          let check =  state.findIndex(item => item._id ==  action._id );
          if(check != -1){
               let newData  =   state.map(item => {
                    if(item._id ==  action._id){
                         return  { ...item , quantity: item.quantity + 1 }
                    }else {
                        return item ;
                    }
                });
               return newData ;
          }else {
             let new_item =  { ...action , quantity : 1 };
             return [ ...state , new_item];
          }
   }) , 
   on(removeBucket , (state , action )=>{
           
            let check =  state.findIndex(item => item._id ==  action._id );
            if(check != -1){
                let newData  =   state.map(item => {
                    if((item._id ==  action._id) &&  item.quantity > 0 ){
                        return  { ...item , quantity: item.quantity - 1 } ;
                    }else {
                        return item ;
                    }
                }).filter(item => item.quantity );
                return newData ;
            }else {
               return state ;
            }
    }) ,


)