import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-forms';

  userModel = new User('Aditya', 'flat102,Abc appartments', 4445484489, 14/7/2020,'adi@test.com')

  onSubmit() {
    console.log(this.userModel)

  }
  
}






