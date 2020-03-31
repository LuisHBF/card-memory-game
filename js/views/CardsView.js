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
            this._cards.map(card => {
                if(!card.found)
                 return `
                    <div class="col-sm-6 col-md-3 p-4 gameCardCol">
                            <div class="gameCard text-center" onclick="this.classList.toggle('is-flipped')">
                                <div class="gameCardTransparentLayer" id="${card.id}">
                                </div>
                                <div class="gameCardFace gameCardFront">
                                    <h1>🤔</h1>
                                </div>
                                <div class="gameCardFace gameCardBack">
                                    <i class="${card.icon.icon}" style="color: ${card.icon.color}"></i>
                                    <h3>${card.title}</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                `
            }).join('')
            }
        `;
    }

    async update(cards){
        this._cards = cards;
        const html = this._draw();
        this._element.innerHTML = html;
    }

}