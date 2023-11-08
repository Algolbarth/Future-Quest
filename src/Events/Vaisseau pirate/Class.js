import svelte from "./Interface.svelte";
import {Ship as ShipClass} from '../../Ship.js';

export class VaisseauPirate {
    name = "Vaisseau pirate";
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
        this.ennemy = new ShipClass(System.game, "Vaisseau Pirate");
        this.ennemy.addPart(System, System.parts.getByName("Coque", level));
        if (level > 3) {
            this.ennemy.addPart(System, System.parts.getByName("Générateur", level));
        }
        else {
            this.ennemy.addPart(System, System.parts.getByName("Générateur", 3));
        }
        this.ennemy.addPart(System, System.parts.getByName("Cannon léger", level));
        this.fuel = 2;
        this.steel = 5 + 5*level;
        this.money = 5 + 5*level;
    }
}