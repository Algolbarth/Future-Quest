import {Part as PartClass} from '../Part.js';

export class Dortoirs extends PartClass {
    name = "Dortoirs";
    description = "Loge les membres d'équipages.";
    levels = [{
        level : 1,
        text : "1 membres d'équipage max",
        price : 50,
    },{
        level : 2,
        text : "2 membres d'équipage max",
        price : 25,
    },{
        level : 3,
        text : "3 membres d'équipage max",
        price : 50,
    },{
        level : 4,
        text : "4 membres d'équipage max",
        price : 75,
    },{
        level : 5,
        text : "5 membres d'équipage max",
        price : 100,
    }];

    constructor (level) {
        super(level);
    }
} 