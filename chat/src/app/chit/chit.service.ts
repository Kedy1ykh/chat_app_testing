import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user-details.model";
import { Socket } from "ngx-socket-io";
import { map } from "rxjs";
import { Message } from "../models/message.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ChitService {
    user: UserDetails = {
        id: '1',
        name: 'a',
    };
    messages: Message[] = [];
    chattingWith = new Subject<UserDetails>();

    constructor(private socket: Socket) {}

    sendMessage(message: Message){
        console.log('send message', message)
        this.socket.emit('message', message);
    }

    getMessage() {
        console.log('message', this.messages);
        return this.socket.fromEvent('message').pipe(map((data: any) => data))
    }

    getUser() {
        console.log('users,', this.user);
        return this.socket.fromEvent('current_users').pipe(map((data: any) => data))
    }
}