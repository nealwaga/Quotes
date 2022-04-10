import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactName: string;
  contactPublisher: string;
  contactMessage: string;
  newMessage; any;

  constructor() { }

  ngOnInit(): void {
  }

}
