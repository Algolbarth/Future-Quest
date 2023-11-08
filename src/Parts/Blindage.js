import {Part as PartClass} from '../Part.js';

export class Blindage extends PartClass {
    name = "Blindage";
    description = "Diminue les dégâts reçus par le vaisseau.";
    levels = [{
        level : 1,
        text : "Réduction de 1 dégât",
        price : 50,
    },{
        level : 2,
        text : "Réduction de 2 dégâts",
        price : 25,
    },{
        level : 3,
        text : "Réduction de 3 dégâts",
        price : 50,
    },{
        level : 4,
        text : "Réduction de 4 dégâts",
        price : 75,
    },{
        level : 5,
        text : "Réduction de 5 dégâts",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }
} 