import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentExit } from './can-component-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit ,CanComponentExit{
  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changesSaved=false;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

 
  ngOnInit() {
    

    console.log(this.route);
    this.route.params.subscribe((parms:Params)=>{
      console.log(parms['id']);
      
      const id=parms['id']

    this.server = this.serversService.getServer(+id)!;

    })
    
    
    this.route.queryParams.subscribe((queryParams:Params)=>{
      console.log(this.allowEdit);
      
      this.allowEdit=+queryParams['allowEdit']===1?true:false
      console.log(this.allowEdit);

    })
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route})

  }


    CanComponentExit() :boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{

      if(!this.allowEdit){
        return true
      }

      if((this.serverName !==this.server.name || this.serverStatus!== this.server.status)&& !this.changesSaved){
        return confirm("are you really want to exit")
      }
      else{

        return true
      }


    };
}
