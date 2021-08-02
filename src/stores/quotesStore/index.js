import {makeAutoObservable} from "mobx";

import { quotesService } from '~/API'

class Quotes{
    quotes = [];
    error = "";
    id = "";

    constructor() {
        makeAutoObservable(this)
    }

    async getQuotes(){
        const response = await quotesService.getQuotesApi()
        this.setQuotes(response.data)
    }

    get getQuoteById(){
        let findQuote = {fullName: "", description: "", date: "", image: { imageName: "", webImagePath: "" }, alt: ""}
        this.quotes.map(quote => {
            if(quote.id === this.id){
                findQuote = quote
                findQuote.alt = quote.image.alt
            }
        })
        return findQuote;
    }


    get getQuotesTable(){
        return this.quotes;
    }

    setQuotes(quotes){
        this.quotes = quotes
    }
}

export default new Quotes();
