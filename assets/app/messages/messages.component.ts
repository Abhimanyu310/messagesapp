import { Component } from '@angular/core';
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./message-input.component";



@Component({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <!--<section class="col-md-8 col-md-offset-2">-->
                <!--<input type="text" [(ngModel)]="message.content">   -->
            <!--</section>-->
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div>
    `,
    directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent{

}