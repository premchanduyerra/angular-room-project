import { ParseError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServerResolver } from 'src/app/serverResolver.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string; } | undefined;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

this.route.data.subscribe((data:Data)=>{
  this.server=data['server']
  
})




    // this.server = this.serversService.getServer(1) !;
    // this.route.params.subscribe((parms:Params)=>{
      
    //   const id:number=parseInt(parms['id'])
     
   
    //   this.server=this.serversService.getServer(id)!
    // })
  }

  onEdit(){
    
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }

}
