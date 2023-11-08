import {Part as PartClass} from '../Part.js';

export class Generateur extends PartClass {
    name = "Générateur";
    description = "Distribue l'énergie aux armes lors de combat.";
    levels = [{
        level : 1,
        text : "1 énergie max",
        price : 50,
    },{
        level : 2,
        text : "2 énergie max",
        price : 25,
    },{
        level : 3,
        text : "3 énergie max",
        price : 50,
    },{
        level : 4,
        text : "4 énergie max",
        price : 75,
    },{
        level : 5,
        text : "5 énergie max",
        price : 100,
    },{
        level : 6,
        text : "6 énergie max",
        price : 150,
    },{
        level : 7,
        text : "7 énergie max",
        price : 200,
    },{
        level : 8,
        text : "8 énergie max",
        price : 300,
    },{
        level : 9,
        text : "9 énergie max",
        price : 400,
    },{
        level : 10,
        text : "10 énergie max",
        price : 500,
    },{
        level : 11,
        text : "11 énergie max",
        price : 600,
    },{
        level : 12,
        text : "12 énergie max",
        price : 750,
    }];

    constructor (level) {
        super(level);
    }
} 