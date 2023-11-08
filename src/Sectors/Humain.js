import { Sector as SectorClass } from '../Sector.js';

export class SecteurHumain extends SectorClass {
    name = "Secteur Humain";

    constructor(System, slot) {
        super(slot);
        for (let i = 0; i < 21; i++) {
            let step = [];
            if (i == 0) {
                step.push(System.planets.getByName("Planète civile", slot + 1, i));
            }
            else if (i == 20) {
                step.push(System.planets.getByName("Base ennemie", slot + 1, i));
            }
            else {
                let listPlanet;
                if (Math.random() < 0.75) {
                    listPlanet = ["Planète civile"];
                }
                else {
                    listPlanet = ["Astéroides"];
                }
                for (let j = 0; j < 1 + parseInt(Math.random() * 3); j++) {
                    step.push(System.planets.getByName(listPlanet[parseInt(Math.random()*listPlanet.length)], slot + 1, i));
                }
            }
            this.steps.push(step);
        }
        let listShop = [];
        for (let i = 0; i < 2; i++) {
            let randomStep = 1 + parseInt(Math.random() * (this.steps.length - 2));
            while (listShop.includes(randomStep)) {
                randomStep = 1 + parseInt(Math.random() * (this.steps.length - 2));
            }
            listShop.push(randomStep);
            this.steps[randomStep][parseInt(Math.random() * this.steps[randomStep].length)] = System.planets.getByName("Station marchande", slot + 1, randomStep);
        }
    }
}