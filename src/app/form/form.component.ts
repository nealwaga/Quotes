import { Quote } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  newQuote = new Quote ( 0, "", 0, 0);

  @Output() addQuote = new EventEmitter < Quote >();
 
// function that creates a new quote array

  submittingQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote (0, "", 0, 0)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
function newQuote(newQuote: any) {
  throw new Error('Function not implemented.');
}

