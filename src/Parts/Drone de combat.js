import {Part as PartClass} from '../Part.js';

export class DroneDeCombat extends PartClass {
    name = "Drone de combat";
    description = "Un drone d'attaque tirant automatiquement sur les vaisseaux ennemis.";
    levels = [{
        level : 1,
        text : "Inflige 2 dégâts à chaque tour de combat",
        price : 50,
    },{
        level : 2,
        text : "Inflige 4 dégâts à chaque tour de combat",
        price : 25,
    },{
        level : 3,
        text : "Inflige 6 dégâts à chaque tour de combat",
        price : 50,
    },{
        level : 4,
        text : "Inflige 8 dégâts à chaque tour de combat",
        price : 75,
    },{
        level : 5,
        text : "Inflige 10 dégâts à chaque tour de combat",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    action = function (ship, target) {
        if (Math.random() + target.avoid() < 1 + ship.accuracy()) {
            let damage_result = target.damage(2*this.level);
            return target.name + " subit " + damage_result.total + " dégâts.";
        }
        else {
            return target.name + " esquive l'attaque.";
        }
    };
} 