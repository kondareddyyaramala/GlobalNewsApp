import { Component, OnInit, Input } from '@angular/core';
import { ToastInterface } from "../../models/toaster.interface";

@Component({
  selector: 'app-toaster-message',
  templateUrl: './toaster-message.component.html',
  styleUrls: ['./toaster-message.component.scss']
})
export class ToasterMessageComponent {

   @Input() toast: ToastInterface; 
 
   constructor() {}
}
