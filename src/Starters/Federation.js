import {Ship as ShipClass} from '../Ship.js';

export class Federation {
    name = "Fédération";
    ship = {};

    constructor (System) {
        let ship = new ShipClass(System.game, "Fédération");

        let pilote = System.races.getByName("Humain");
        pilote.getSkill("Pilotage").level = 1;
        ship.characters.push(pilote);
        
        let soldat = System.races.getByName("Humain");
        soldat.getSkill("Combat").level = 1;
        ship.characters.push(soldat);

        let marchand = System.races.getByName("Humain");
        marchand.getSkill("Commerce").level = 1;
        ship.characters.push(marchand);
        
        ship.addPart(System, System.parts.getByName("Coque", 3));
        ship.addPart(System, System.parts.getByName("Dortoirs", 3));
        ship.addPart(System, System.parts.getByName("Générateur", 3));
        ship.addPart(System, System.parts.getByName("Moteurs"));
        ship.addPart(System, System.parts.getByName("Scanner"));
        ship.addPart(System, System.parts.getByName("Cannon léger", 2));
        
        this.ship = ship;
    }
}