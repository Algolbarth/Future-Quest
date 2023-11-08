import {Part as PartClass} from '../Part.js';

export class Bouclier extends PartClass {
    name = "Bouclier";
    description = "Absorbe des dégâts pour prôtéger le vaisseau. Se reforme à chaque saut.";
    levels = [{
        level : 1,
        text : "5 point de bouclier",
        price : 50,
    },{
        level : 2,
        text : "10 point de bouclier",
        price : 25,
    },{
        level : 3,
        text : "15 point de bouclier",
        price : 50,
    },{
        level : 4,
        text : "20 point de bouclier",
        price : 75,
    },{
        level : 5,
        text : "25 point de bouclier",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    add = function (System, ship) {
        ship.shield = ship.shield_max();
    }

    upgradeEffect = function (System) {
        System.game.ship.shield += 5;
    }
} 