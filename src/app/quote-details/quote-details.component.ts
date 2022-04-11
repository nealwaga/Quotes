import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  quote!: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

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
