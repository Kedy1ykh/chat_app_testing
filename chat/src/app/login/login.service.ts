import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user-details.model";
import { Socket } from "ngx-socket-io";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    user: UserDetails = {
      id: '1',
      name: 'a',  
    };
    isAuthenticated = false;

    constructor(private socket: Socket) {}

    login(user: UserDetails){
        this.user = user;
        this.isAuthenticated = true;
        this.socket.emit('sign_in', this.user);
        console.log('sign_in', this.user);
    }
}