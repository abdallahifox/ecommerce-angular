import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ecommerce-clone';
  isAdmin:boolean = true
  navSub!:Subscription
  constructor(){}
  
}
