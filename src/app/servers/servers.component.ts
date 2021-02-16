import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: [`app-servers`] --> ist nun ein css-Attribut
  //selector: '.app-servers' --> can be selected by class!
  templateUrl: './servers.component.html',
  //template:[`... inhalt auch mehrzeilig, was sonst in der template html steht...`]
  styleUrls: ['./servers.component.css']
  //template:[`... inhalt auch mehrzeilig, was sonst in der template html steht...`]

})
export class ServersComponent implements OnInit {
  protected allowNewServer = false;
  getAllowNewServer(){
    return this.allowNewServer;
  }
  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      },5000)
  }

  ngOnInit(): void {
  }

}
