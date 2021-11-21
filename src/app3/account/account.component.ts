import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;

  constructor(private loggingService:LoggingService,private accountsService:AccountsService){
   
  }

  onSetTo(status: string) {
   this.accountsService.onStatusChanged(this.id,status)
    console.log(this.accountsService.accounts);
  this.accountsService.statusUpdated.emit(status)
  }
}
