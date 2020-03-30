import {CardsView} from '../views/CardsView.js'

export class CardController{
    
    constructor(element){
        const $ = (element) => document.querySelector(element);

        this._element = element;
        this._cards = [];
        this._selectedCards = [];
        this._view = new CardsView($('#gameRow'),this);
    }

    addPairOfSameCard(card){
        this._cards.push(card);
        this._cards.push(card);
    }

    shuffleCards(){
        this._cards.sort(() => Math.random() - 0.5);
    }

    begin(){
        this._view.update(this._cards);
    }

    get cards(){
        return this._cards;
    }

}