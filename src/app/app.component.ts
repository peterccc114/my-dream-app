import { Component } from '@angular/core';

import{ MyNewComponentComponent } from './my-new-component/my-new-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // saysomething(message){
  //   return message + ' something';
  // }
}
// var greeter = new greeter();
// greeter.saysomething('hello');