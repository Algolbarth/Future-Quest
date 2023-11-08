import {Part as PartClass} from '../Part.js';

export class Laser extends PartClass {
    name = "Laser";
    description = "Un rayon laser perforant le blindage ennemi.";
    weapon = true;
    levels = [{
        level : 1,
        text : "2 dégâts par tir",
        price : 50,
    },{
        level : 2,
        text : "4 dégâts par tir",
        price : 25,
    },{
        level : 3,
        text : "6 dégâts par tir",
        price : 50,
    },{
        level : 4,
        text : "8 dégâts par tir",
        price : 75,
    },{
        level : 5,
        text : "10 dégâts par tir",
        price : 100,
    },{
        level : 6,
        text : "12 dégâts par tir",
        price : 150,
    },{
        level : 7,
        text : "14 dégâts par tir",
        price : 200,
    },{
        level : 8,
        text : "16 dégâts par tir",
        price : 300,
    },{
        level : 9,
        text : "18 dégâts par tir",
        price : 400,
    },{
        level : 10,
        text : "20 dégâts par tir",
        price : 500,
    }];

    constructor (level) {
        super(level);
    }

    attack = attack(this);
}

function attack (part) {
    let attack = {
        nom : "Attaquer",
        part : part,
        description : function () {
            return "Inflige " + 2*this.part.level + " dégâts. Ignore la réduction de dégâts du vaisseau adverse.";
        },
        cost : function () {
            return "- 3 Énergie";
        },
        need : function (ship) {
            if (ship.energy >= 3) {
                return true;
            }
            return false;
        },
        use : function (ship, target) {
            ship.energy -= 3;
            if (Math.random() + target.avoid() < 1 + ship.accuracy()) {
                let damage_result = target.damage(2*this.part.level, true);
                return target.name + " subit " + damage_result.total + " dégâts.";
            }
            else {
                return target.name + " esquive l'attaque.";
            }
        }
    }
    return attack;
}