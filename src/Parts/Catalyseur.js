import {Part as PartClass} from '../Part.js';

export class Catalyseur extends PartClass {
    name = "Catalyseur";
    description = "Génère du carburant à chaque saut.";
    levels = [{
        level : 1,
        text : "+1 Carburant à chaque saut",
        price : 50,
    },{
        level : 2,
        text : "+2 Carburant à chaque saut",
        price : 25,
    },{
        level : 3,
        text : "+3 Carburant à chaque saut",
        price : 50,
    },{
        level : 4,
        text : "+4 Carburant à chaque saut",
        price : 75,
    },{
        level : 5,
        text : "+5 Carburant à chaque saut",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    giveFuel = function (System) {
        System.game.ship.fuel += this.level;
    }
} 