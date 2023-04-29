import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverName = 'TestServer';
  serverCreationStatus = 'No server was created!';
  username = '';
  serverCreated = false;

  constructor(){
    setTimeout(
      () => {
        this.allowNewServer = true;
      }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
