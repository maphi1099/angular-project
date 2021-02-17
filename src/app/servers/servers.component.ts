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
  serverCreationStatus = 'No Server was created';
  serverName = 'add Servername';
  serverCreated = false;
  servers = ['First-Server'];
  

  getAllowNewServer(){
    return this.allowNewServer;
  }
  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      },2000)
  }

  ngOnInit(){
    
  }
   onCreateServer(){
     this.serverCreationStatus = 'Server was Created! Name is '+ this.serverName;
     this.serverCreated = true;
     this.servers.push(this.serverName);
   }
   onUpdateServerName(event: any){
     //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
   }

   
}
