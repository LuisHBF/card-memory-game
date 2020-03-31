import { Icon } from "./Icon.js";

export class Card{

    constructor(icon = new Icon(), title = 'default house'){
        this._icon = icon;
        this._found = false;
        this._title = title;
        this._id = '';
    }

    generateId(number){
        this._id = `${this._icon.icon}-${number}`.replace(' ','_'); 
    }

    findElement(){
        if(!this._id){
            throw new Error('The Card ID must be denifed before search!');
        }
        return document.querySelector(`#${this._id}`)

    }

    dismiss(){
        this._found = true;
        let cardElement = this.findElement();
        let colElement = cardElement.parentElement.parentElement;
        colElement.classList.toggle('dismiss');
        setTimeout(() => colElement.classList.toggle('displayNone'), 1050);
    }

    get icon(){
        return this._icon;
    }

    get found(){
        return this._found;
    }

    get title(){
        return this._title;
    }

    get id(){
        return this._id;
    }

    set icon(icon){
        this._icon = icon;
    }

    set found(found){
        this._found = found;
    }

    set title(title){
        this._title = title;
    }

}