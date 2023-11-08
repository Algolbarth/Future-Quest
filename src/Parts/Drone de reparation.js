import {Part as PartClass} from '../Part.js';

export class DroneDeReparation extends PartClass {
    name = "Drone de réparation";
    description = "Un drone de support réparant les dégâts subis par le vaisseau au fur et à mesure des combats.";
    levels = [{
        level : 1,
        text : "Soigne 2 point de vie à chaque tour de combat",
        price : 50,
    },{
        level : 2,
        text : "Soigne 4 points de vie à chaque tour de combat",
        price : 25,
    },{
        level : 3,
        text : "Soigne 6 points de vie à chaque tour de combat",
        price : 50,
    },{
        level : 4,
        text : "Soigne 8 points de vie à chaque tour de combat",
        price : 75,
    },{
        level : 5,
        text : "Soigne 10 points de vie à chaque tour de combat",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    action = function (ship) {
        ship.heal(2*this.level);
        return ship.name + " se soigne de " + 2*this.level + " points de vie.";
    };
} 