import {Battle as BattleClass} from './Battle.js';

export class Game {
    System;
    money = 100;
    steel = 0;
    characters = [];
    map = [];
    sector = {};
    battle = new BattleClass(this);

    constructor(System) {
        this.System = System;
        for (let i = 0; i < 6; i++) {
            let stage = [];
            let sectorNumber = 1;
            if (i > 0 && i < 5) {
                sectorNumber = 1 + parseInt(Math.random() * 2);
            }
            for (let j = 0; j < sectorNumber; j++) {
                stage.push(System.sectors.getByName("Secteur Humain", i));
            }
            this.map.push(stage);
        }
        this.sector = this.map[0][0];
        this.sector.info = true;
        this.sector.visited = true;
    }

    jump = function (planet) {
        this.planet = planet;
        planet.info = true;
        planet.visited = true;
        if (this.ship.shield_max() > 0) {
            this.ship.shield = this.ship.shield_max();
        }
        if (this.ship.checkPart("Scanner")) {
            this.ship.getPart("Scanner").scan(this.System);
        }
        if (this.ship.checkPart("Catalyseur")) {
            this.ship.getPart("Catalyseur").giveFuel(this.System);
        }
        if (this.ship.checkPart("Extracteur")) {
            this.ship.getPart("Extracteur").giveSteel(this.System);
        }
        if (this.ship.checkPart("Maintenance")) {
            this.ship.getPart("Maintenance").heal(this.System);
        }
        if (planet.step == this.sector.steps.length - 1 && this.sector.slot < this.map.length - 1) {
            let nextSectors = this.map[this.sector.slot + 1];
            for (let i = 0; i < nextSectors.length; i++) {
                nextSectors[i].info = true;
            }
        }
    }
}