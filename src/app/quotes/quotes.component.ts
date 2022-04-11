//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

ind: number | undefined; 

  //@Input()
  //quote: Quote = new Quote;

  quotes: Quote[] = [
      new Quote (1, "HTGAWM", "Why is your penis on a dead girl's phone?","Annalise Keating",new Date(2014, 11, 24), 21, 2),
      new Quote (2, "Avengers Infinity War", "I am inevitable!", "Thanos", new Date(2021, 2, 12), 205, 20),
      new Quote (2, "Avenegers End-Game", "I love you 300.", "Tony Stark", new Date(2020, 6, 12), 110, 50),
  ]

  highlightQuote() {
    for (let i = 0; i < this.quotes.length; i++) {
      let ind = 0;
      
      if (this.quotes[i].upvote < this.quotes[i++].upvote) {
        ind = i;
      } else{
        ind = i++;
      }
    }
  }
  deleteQuote(toDelete: any, index: number) {
    confirm('Confirm delete')
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote: any) {
    let quotesLength =  this.quotes.length;
    quote.id = quotesLength + 1;
//    quote.date = new Date(quote.date);
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}




