import {Part as PartClass} from '../Part.js';

export class Maintenance extends PartClass {
    name = "Maintenance";
    description = "Répare le vaisseau à chaque saut.";
    levels = [{
        level : 1,
        text : "Soigne 2 point de vie à chaque saut",
        price : 50,
    },{
        level : 2,
        text : "Soigne 4 point de vie à chaque saut",
        price : 25,
    },{
        level : 3,
        text : "Soigne 6 point de vie à chaque saut",
        price : 50,
    },{
        level : 4,
        text : "Soigne 8 point de vie à chaque saut",
        price : 75,
    },{
        level : 5,
        text : "Soigne 10 point de vie à chaque saut",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    heal = function (System) {
        System.game.ship.heal(2*this.level);
    }
} 