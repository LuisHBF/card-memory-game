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