export class Quote {

    id: number;
    submitter:string;
    quote: string;
    author: string;
    date: Date;
    upvote: number;
    downvote: number;

   constructor (id:number, submitter:string, quote:string, author: string, date: Date, upvote:number, downvote:number){
         this.id = id;
         this.submitter = submitter;
         this.quote = quote;
         this.author = author;
         this.date = date;
         this.upvote = upvote;
         this.downvote = downvote;    }


}

