import {Part as PartClass} from '../Part.js';

export class Extracteur extends PartClass {
    name = "Extracteur";
    description = "Exraie de l'acier dans les débris spatiaux que votre vaisseau recontre sur le chemin entre 2 planètes.";
    levels = [{
        level : 1,
        text : "+2 Acier à chaque saut",
        price : 50,
    },{
        level : 2,
        text : "+4 Acier à chaque saut",
        price : 25,
    },{
        level : 3,
        text : "+6 Acier à chaque saut",
        price : 50,
    },{
        level : 4,
        text : "+8 Acier à chaque saut",
        price : 75,
    },{
        level : 5,
        text : "+10 Acier à chaque saut",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }

    giveSteel = function (System) {
        System.game.steel += 2*this.level;
    }
} 