import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GroceryComponent } from '../grocery/grocery.component';
import { IncrementComponent } from '../increment/increment.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , GroceryComponent , IncrementComponent , HomeComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
