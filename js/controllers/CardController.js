import {CardsView} from '../views/CardsView.js'
import { Card } from '../models/Card.js';

export class CardController{
    
    constructor(element){
        const $ = (element) => document.querySelector(element);

        this._element = element;
        this._cards = [];
        this._selectedCards = [];
        this._view = new CardsView($('#gameRow'),this);
    }

    addPairOfSameCard(card){
        this._cards.push(new Card(card.icon, card.title));
        this._cards.push(new Card(card.icon, card.title));
    }

    shuffleCards(){
        this._cards.sort(() => Math.random() - 0.5);
    }

    begin(){
        this._cards.forEach((card, index) => {
            card.generateId(index);
        });

        this._view.update(this._cards);

        this._addCardClickEventLisneners();
    }

    _selectCard(event){
        this._selectedCards.push(this._cards.filter((card) => {
            if(card.id === event.target.id)
                return card;
        })[0]);

        this._checkSelectedCards();
    }

    _checkSelectedCards(){
        if(this._selectedCards.length == 2){
            if(this._selectedCards[0].icon.icon === this._selectedCards[1].icon.icon){
                this._selectedCards[0].dismiss();
                this._selectedCards[1].dismiss();
            }
            this._selectedCards = [];
            setTimeout(() => {
                this._view.update(this._cards);
                this._addCardClickEventLisneners();
            }, 1030);
        }

    }

    _addCardClickEventLisneners(){
        this._cards.forEach(card => {
            if(!card.found){
                let cardElement = document.querySelector(`#${card.id}`);
                cardElement.addEventListener('click', (event) => {
                    this._selectCard(event);
                });
            }
        });
    }

    get cards(){
        return this._cards;
    }

}