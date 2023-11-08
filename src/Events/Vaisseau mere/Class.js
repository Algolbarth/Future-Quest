import svelte from "./Interface.svelte";
import {Ship as ShipClass} from '../../Ship.js';

export class VaisseauMere {
    name = "Vaisseau mère";
    svelte = svelte;
    ennemy;
    fuel = 0;
    steel = 0;
    money = 0;
    win = function (System) {
        System.game.ship.fuel += this.fuel;
        System.game.steel += this.steel;
        System.game.money += this.money;
    }
    step = "select";

    constructor (System, level) {
        this.ennemy = new ShipClass(System.game, "Vaisseau Mère");
        this.ennemy.addPart(System, System.parts.getByName("Coque", level*2));
        this.ennemy.addPart(System, System.parts.getByName("Générateur", 6));
        this.ennemy.addPart(System, System.parts.getByName("Cannon léger", level));
        this.fuel = 10;
        this.steel = 10 + 10*level;
        this.money = 10 + 10*level;
    }
}