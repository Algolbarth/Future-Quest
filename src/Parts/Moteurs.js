import {Part as PartClass} from '../Part.js';

export class Moteurs extends PartClass {
    name = "Moteurs";
    description = "Les moteurs du vaisseau, permettant la propulsion une fois dans l'orbite de planète.";
    levels = [{
        level : 1,
        text : "10 Carburant dépensés par action",
        price : 50,
    },{
        level : 2,
        text : "9 Carburant dépensés par action",
        price : 25,
    },{
        level : 3,
        text : "8 Carburant dépensés par action",
        price : 50,
    },{
        level : 4,
        text : "7 Carburant dépensés par action",
        price : 75,
    },{
        level : 5,
        text : "6 Carburant dépensés par action",
        price : 100,
    },{
        level : 6,
        text : "5 Carburant dépensés par action",
        price : 150,
    }];

    constructor (level=1) {
        super(level);
    }

    move = function () {
        switch (this.level) {
            case 1:
                return 10;
            case 2:
                return 8;
            case 3:
                return 6;
        }
    }
} 