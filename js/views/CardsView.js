import {Icon} from '../models/Icon.js';
export class CardsView{

    constructor(element, cardController){
        this._cards = []; 
        this._element = element;
        this._controller = cardController;
    }

    _draw(){
        return `
        
            ${ 
            this._cards.map(card => 
                `
                    <div class="col-sm-6 col-md-3 p-4">
                        <div class="card text-center" onclick="this.alertq()">
                            <i class="${card.icon.icon}" style="color: ${card.icon.color}"></i>
                            <h3>${card.title}</h3>
                        </div>
                    </div>
                `
            ).join('')
            }
        `;
    }

    update(cards){
        this._cards = cards;
        const html = this._draw();
        this._element.innerHTML = html;
    }

    alertq(){
        alert(1);
    }
}