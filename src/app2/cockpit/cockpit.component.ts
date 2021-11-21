import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
@Output()  blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContent!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverData:HTMLInputElement) {
   this.serverCreated.emit({
     serverName:serverData.value,
     serverContent:this.serverContent.nativeElement.value
   })
  }

  onAddBlueprint(serverData:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:serverData.value,
      serverContent:this.serverContent.nativeElement.value
    })
  }
}
