import { Part as PartClass } from '../Part.js';

export class Scanner extends PartClass {
    name = "Scanner";
    description = "Des outils de spectrométrie indiquant la nature de planètes avoisinantes.";
    levels = [{
        level : 1,
        text : "Affiche la nature des planètes de l'étape suivante",
        price : 50,
    },{
        level : 2,
        text : "Affiche la nature des planètes des 2 étapes suivantes",
        price : 25,
    },{
        level : 3,
        text : "Affiche la nature des planètes des 3 étapes suivantes",
        price : 50,
    },{
        level : 4,
        text : "Affiche la nature des planètes des 4 étapes suivantes",
        price : 75,
    },{
        level : 5,
        text : "Affiche la nature des planètes des 5 étapes suivantes",
        price : 100,
    }];

    constructor(level) {
        super(level);
    }

    scan = function (System) {
        for (let i = 1; i <= this.level; i++) {
            if (System.game.planet.step + i < System.game.sector.steps.length) {
                let step = System.game.sector.steps[System.game.planet.step + i];
                for (let j = 0; j < step.length; j++) {
                    step[j].info = true;
                }
            }
        }
    }

    upgradeEffect = function (System) {
        this.scan(System)
    }
} 