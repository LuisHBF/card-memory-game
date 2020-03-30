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

        this._cards.forEach(card => {
            document.querySelector(`#${card.id}`).addEventListener('click', (event) => {
                this._selectCard(event);
            });
        });
    }

    _selectCard(event){
        console.log(event.target.id);
    }

    get cards(){
        return this._cards;
    }

}