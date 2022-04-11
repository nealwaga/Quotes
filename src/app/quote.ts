//export class Quote {

//    id: number;
//    quote: string;
//    upvotes: number;
//    downvotes: number;

//   constructor (id:number, quote:string, upvotes:number, downvotes:number){
//         this.id = id;
//         this.quote = quote;
//         this.upvotes = upvotes;
//         this.downvotes = downvotes;
//    }

//}


export class Quotes {
    id: number | undefined;
    submitter: string | undefined;
    quote: string | undefined;
    author: string | undefined;
    date: Date | undefined;
    upvote: number | undefined;
    downvote: number | undefined;
}