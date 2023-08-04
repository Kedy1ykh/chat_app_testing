import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChitComponent } from './chit/chit.component';
import { UserListComponent } from './chit/user-list/user-list.component';
import { MessagesComponent } from './chit/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { PipesModule } from './pipe/pipe.module';

import { LoginService } from './login/login.service';
import { ChitService } from './chit/chit.service';

const config: SocketIoConfig = {url: environment.url, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChitComponent,
    UserListComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [LoginService, ChitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
