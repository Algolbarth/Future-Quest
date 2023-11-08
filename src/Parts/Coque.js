import {Part as PartClass} from '../Part.js';

export class Coque extends PartClass {
    name = "Coque";
    description = "La structure du vaisseau.";
    levels = [{
        level : 1,
        text : "10 points de vie max",
        price : 50,
    },{
        level : 2,
        text : "20 points de vie max",
        price : 25,
    },{
        level : 3,
        text : "30 points de vie max",
        price : 50,
    },{
        level : 4,
        text : "40 points de vie max",
        price : 75,
    },{
        level : 5,
        text : "50 points de vie max",
        price : 100,
    },{
        level : 6,
        text : "60 points de vie max",
        price : 150,
    },{
        level : 7,
        text : "70 points de vie max",
        price : 200,
    },{
        level : 8,
        text : "80 points de vie max",
        price : 300,
    },{
        level : 9,
        text : "90 points de vie max",
        price : 400,
    },{
        level : 10,
        text : "100 points de vie max",
        price : 500,
    },{
        level : 11,
        text : "110 points de vie max",
        price : 600,
    },{
        level : 12,
        text : "120 points de vie max",
        price : 750,
    }];

    constructor (level) {
        super(level);
    }

    add = function (System, ship) {
        ship.life = ship.life_max();
    }

    upgradeEffect = function (System) {
        System.game.ship.life += 10;
    }
} 