import {Part as PartClass} from '../Part.js';

export class CannonLourd extends PartClass {
    name = "Cannon lourd";
    description = "Un cannon puissant pour les batailles spatiales.";
    weapon = true;
    levels = [{
        level : 1,
        text : "5 dégâts par tir",
        price : 50,
    },{
        level : 2,
        text : "10 dégâts par tir",
        price : 25,
    },{
        level : 3,
        text : "15 dégâts par tir",
        price : 50,
    },{
        level : 4,
        text : "20 dégâts par tir",
        price : 75,
    },{
        level : 5,
        text : "25 dégâts par tir",
        price : 100,
    },{
        level : 6,
        text : "30 dégâts par tir",
        price : 150,
    },{
        level : 7,
        text : "35 dégâts par tir",
        price : 200,
    },{
        level : 8,
        text : "40 dégâts par tir",
        price : 300,
    },{
        level : 9,
        text : "45 dégâts par tir",
        price : 400,
    },{
        level : 10,
        text : "50 dégâts par tir",
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
            return "Inflige " + 5*this.part.level + " dégâts. 85% de précision.";
        },
        cost : function () {
            return "- 4 Énergie";
        },
        need : function (ship) {
            if (ship.energy >= 4) {
                return true;
            }
            return false;
        },
        use : function (ship, target) {
            ship.energy -= 4;
            if (Math.random() + target.avoid() < 0.85 + ship.accuracy()) {
                let damage_result = target.damage(5*this.part.level);
                return target.name + " subit " + damage_result.total + " dégâts.";
            }
            else {
                return target.name + " esquive l'attaque.";
            }
        }
    }
    return attack;
}