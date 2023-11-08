import {Part as PartClass} from '../Part.js';

export class CannonLeger extends PartClass {
    name = "Cannon léger";
    description = "Un cannon simple et fiable pour les batailles spatiales.";
    weapon = true;
    levels = [{
        level : 1,
        text : "3 dégâts par tir",
        price : 50,
    },{
        level : 2,
        text : "6 dégâts par tir",
        price : 25,
    },{
        level : 3,
        text : "9 dégâts par tir",
        price : 50,
    },{
        level : 4,
        text : "12 dégâts par tir",
        price : 75,
    },{
        level : 5,
        text : "15 dégâts par tir",
        price : 100,
    },{
        level : 6,
        text : "18 dégâts par tir",
        price : 150,
    },{
        level : 7,
        text : "21 dégâts par tir",
        price : 200,
    },{
        level : 8,
        text : "24 dégâts par tir",
        price : 300,
    },{
        level : 9,
        text : "27 dégâts par tir",
        price : 400,
    },{
        level : 10,
        text : "30 dégâts par tir",
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
            return "Inflige " + 3*this.part.level + " dégâts.";
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
                let damage_result = target.damage(3*this.part.level);
                return target.name + " subit " + damage_result.total + " dégâts.";
            }
            else {
                return target.name + " esquive l'attaque.";
            }
        }
    }
    return attack;
}