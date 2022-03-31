import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId = 10;
    serverStatus = "Offline";
    serverName  = "";
    serveradd = "";

    onUpdateServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    getServerStatus(){
        return this.serverStatus;
    }
}