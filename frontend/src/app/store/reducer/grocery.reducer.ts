import { createReducer  , on} from '@ngrx/store';
import { Grocery } from '../../models/common.model';
import { updateGrocery} from '../action/grocery.action';




const initialState  : Grocery[] = [  ] ;
 /*   { id: 1, name: 'Rice', price: 300 },
    { id: 2, name: 'Wheat Flour', price: 250 },
    { id: 3, name: 'Sugar', price: 150 },
    { id: 4, name: 'Olive Oil', price: 700 },
    { id: 5, name: 'Milk', price: 50 },
    { id: 6, name: 'Eggs', price: 60 },
    { id: 7, name: 'Butter', price: 120 },
    { id: 8, name: 'Chicken Breast', price: 400 },
    { id: 9, name: 'Bread', price: 30 },
    { id: 10, name: 'Cheese', price: 350 }
     */
 

export const groceryReducer = createReducer(
    initialState ,
    on(updateGrocery , (state , action)=> {
        return action.payload ;
    })
   
    
)

  