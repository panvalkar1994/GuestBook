import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public messageList!:any[];
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.messageService.getAllMessages()
      .subscribe(data=>this.messageList=data);
  }

}
