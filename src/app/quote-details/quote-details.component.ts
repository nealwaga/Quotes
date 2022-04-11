import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent implements OnInit {


  @Input()
  quote!: Quote;

@Output() toDelete = new EventEmitter<boolean>();

constructor() { }

ngOnInit(): void {
} 

  quoteDelete(deleter: boolean) {
    this.toDelete.emit(deleter);
  }

  upvote() {
    this.quote.upvote += 1;
  }

  downvote() {
    this.quote.downvote += 1;
  }

}
