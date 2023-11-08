import {Planet as PlanetClass} from '../Planet.js';

export class Asteroides extends PlanetClass {
    name = "Astéroides";

    constructor (System, level, step, event="Random") {
        super(step);
        if (event == "Random") {
            let listEvent;
            if (Math.random() < 0.5) {
                listEvent = ["Vaisseau pirate"];
            }
            else {
                listEvent = ["Rien", "Collision"];
            }
            this.event = System.events.getByName(listEvent[parseInt(Math.random()*listEvent.length)], level);
        }
        else {
            this.event = System.events.getByName(event, level);
        }
    }
}