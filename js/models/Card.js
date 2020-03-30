import { Icon } from "./Icon.js";

export class Card{

    constructor(icon = new Icon(), title = 'default house'){
        this._icon = icon;
        this._found = false;
        this._title = title;
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