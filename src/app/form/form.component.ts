//import { Quote } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { FormControl } from '@angular/forms';
//import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  newQuote =  new Quote (0, "", "", "", new Date(), 0, 0)
  
  
  @Output() addQuote = new EventEmitter < Quote > ();
 

submitQuote() {
  this.addQuote.emit(this.newQuote);
}
  
  constructor() { }

  ngOnInit(): void {
  }

}

//function newQuotes(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Date, arg5: number, arg6: number) {
//  throw new Error('Function not implemented.');
//}
function newQuote(newQuote: any) {
  throw new Error('Function not implemented.');
}

