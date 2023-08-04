import { Component, OnInit } from '@angular/core';
import { ChitService } from '../chit.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(public chat: ChitService) {}
  ngOnInit(): void {
    this.chat.getUser().subscribe(users => {
      console.log(users)
      this.users = users;
    })
  }

  openChat(event: any, user: any) {
    this.chat.chattingWith.next({
      name: user.value,
      id: user.key
    })
  }
}
