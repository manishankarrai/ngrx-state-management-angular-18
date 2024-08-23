import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment , reset } from '../../store/action/increment.action';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.scss'
})
export class IncrementComponent {

      count$ : Observable<number> ;
      constructor(private store: Store<{increment: number}> ){
          this.count$ =   store.select('increment');
      }
      increment():void {
         this.store.dispatch(increment());
      }
      decrement():void {
        this.store.dispatch(decrement());

      }
      reset():void {
        this.store.dispatch(reset());

      }

}
