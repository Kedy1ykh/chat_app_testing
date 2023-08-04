import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { ChitService } from '../chit.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messageText: string = '';
  message: Message = {
    from: '',
    to: '',
    message: '',
    date: new Date(),
  };
  filter: any;
  chattingWith: UserDetails = {
    id: '',
    name: '',
  };

  constructor(public chat: ChitService) {}

  ngOnInit(): void {
    this.chat.getMessage().subscribe(message => {
      this.chat.messages.push(message)
    })
    this.chat.chattingWith.subscribe(user => {
      this.chattingWith = user
      this.filter = { $or: [{from: user.id}, {to: user.id}]
      }
    })
  }

  sendMessage() {
    this.message = {
      message: this.messageText,
      to: this.chattingWith.id,
      date: new Date()
    }
    this.messageText = ""
    this.chat.sendMessage(this.message)
  }
}
