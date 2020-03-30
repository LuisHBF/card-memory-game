import {CardController} from './controllers/CardController.js';
import {Card} from './models/Card.js';
import { Icon } from './models/Icon.js';

export function initialize(){
    const gameCards = [
        new Card(new Icon('fa fa-home','#9c88ff'),'House'),
        new Card(new Icon('fab fa-angellist','#fbc531'),'Hey bro!'),
        new Card(new Icon('fas fa-apple-alt','#4cd137'),'Apple'),
        new Card(new Icon('fas fa-angry','#e84118'),'I\'m mad!'),
        new Card(new Icon('fas fa-bath','#7f8fa6'),'Bath time!'),
        new Card(new Icon('fas fa-anchor','#00a8ff'),'Anchor')
    ];
   
    const cardsController = new CardController();

    gameCards.forEach(card => cardsController.addPairOfSameCard(card));

    cardsController.shuffleCards();
    cardsController.begin();


}