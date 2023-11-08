import {Planet as PlanetClass} from '../Planet.js';

export class BaseEnnemie extends PlanetClass {
    name = "Base ennemie";

    constructor (System, level, step, event="Random") {
        super(step);
        this.event = System.events.getByName("Vaisseau mère", level);
    }
}