import {Planet as PlanetClass} from '../Planet.js';

export class StationMarchande extends PlanetClass {
    name = "Station marchande";

    constructor (System, level, step, event="Random") {
        super(step);
        this.event = System.events.getByName("Marchand", level);
    }
}