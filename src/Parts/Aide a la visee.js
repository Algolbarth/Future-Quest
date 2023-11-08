import {Part as PartClass} from '../Part.js';

export class AideALaVisee extends PartClass {
    name = "Aide à la visée";
    description = "Augmente la précision des armes lors d'un combat.";
    levels = [{
        level : 1,
        text : "5% de précision",
        price : 50,
    },{
        level : 2,
        text : "10% de précision",
        price : 25,
    },{
        level : 3,
        text : "15% de précision",
        price : 50,
    },{
        level : 4,
        text : "20% de précision",
        price : 75,
    },{
        level : 5,
        text : "25% de précision",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }
} 