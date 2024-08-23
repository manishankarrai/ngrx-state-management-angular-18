import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bucket, Grocery } from '../../models/common.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { storeBucket  , removeBucket} from '../../store/action/bucket.action' ;
import { getAllGrocery } from '../../store/action/grocery.action';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent implements OnInit{
   
     grocery$ :Observable <Grocery[]> ;
     bucket$ :Observable <Bucket[]> ;


    constructor(private store: Store<{groceries: Grocery[], bucket: Bucket[] }>){
        this.grocery$ =  store.select('groceries');
        this.bucket$ =  store.select('bucket');
        this.store.dispatch(getAllGrocery()); 

    }

    addInBucket(item: Grocery) : void {
         this.store.dispatch(storeBucket(item));
    }
    removeFromBucket(item: Grocery) : void {
      this.store.dispatch(removeBucket(item));

    }
    ngOnInit(): void {
        //{ type: '[Movies Page] Load Movies' }   
    }
    

}
