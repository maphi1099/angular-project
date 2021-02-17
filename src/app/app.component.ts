import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  username = 'insert username';
  usernameEmpty(){
    if (this.username == ''){
      return true;
    }
    return false;
  }
  onResetUsername(){
    this.username = '';
  }
}
