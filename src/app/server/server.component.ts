import { rendererTypeName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
`]
})

export class ServerComponent {

    serverId: number;
    serverStatus: string = 'offline';
    
    
    getServerStatus() {
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.round((Math.random()*10000));

    }
    getColor(){
        if(this.serverStatus == 'online'){
            return 'green';
        }
        return 'red';
    }
}