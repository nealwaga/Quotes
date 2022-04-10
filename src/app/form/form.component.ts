import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formName: string;
  formPublisher: string;
  formMessage: string;
  newMessage; any;

  messages = [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
