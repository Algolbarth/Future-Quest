export class Ship {
    name;
    life = 0;
    life_max = function () {
        let value = 0;
        if (this.checkPart("Coque")) {
            value += 10*this.getPart("Coque").level;
        }
        return value;
    };
    shield = 0;
    shield_max = function () {
        let value = 0;
        if (this.checkPart("Bouclier")) {
            value += 5*this.getPart("Bouclier").level;
        }
        return value;
    };
    defense = function () {
        let value = 0;
        if (this.checkPart("Blindage")) {
            value += this.getPart("Blindage").level;
        }
        return value;
    };
    accuracy = function () {
        let value = 0;
        if (this.checkPart("Aide à la visée")) {
            value += 5*this.getPart("Aide à la visée").level;
        }
        return value;
    };
    dodge = false;
    avoid = function () {
        let value = 0;
        value += this.totalSkill("Pilotage")*0.05;
        if (this.dodge) {
            value += 0.15;
        }
        return value;
    };
    energy = 0;
    energy_max = function () {
        let value = 0;
        if (this.checkPart("Générateur")) {
            value += this.getPart("Générateur").level;
        }
        return value;
    };
    characters = [];
    characters_max = function () {
        let value = 0;
        if (this.checkPart("Dortoirs")) {
            value += this.getPart("Dortoirs").level;
        }
        return value;
    };
    fuel = 100;
    parts = [];

    constructor(game, name) {
        this.game = game;
        this.name = name;
    };

    checkPart = function (name, level = 1) {
        for (const part of this.parts) {
            if (part.name == name) {
                if (part.level >= level) {
                    return true;
                }
                return false;
            }
        }
        return false;
    };

    getPart = function (name) {
        for (const part of this.parts) {
            if (part.name == name) {
                return part;
            }
        }
        return false;
    };

    addPart = function (System, part) {
        this.parts.push(part);
        part.add(System, this);
    };

    damage = function (value, perce=false) {
        if (perce=false) {
            value -= this.defense();
        }
        if (value < 0) {
            value = 0;
        }
        let total = value;

        let absorb = 0;
        if (this.shield > 0) {
            if (this.shield >= value) {
                this.shield -= value;
                absorb = value;
                value = 0;
            }
            else {
                value -= this.shield;
                absorb = this.shield;
                this.shield = 0;
            }
        }

        this.life -= value;
        if (this.life < 0) {
            this.life = 0;
        }

        return {total:total,value:value,absorb:absorb};
    };

    heal = function (value) {
        this.life += value;
        if (this.life > this.life_max()) {
            this.life = this.life_max();
        }
    };

    totalSkill = function (name) {
        let value = 0;
        for (const character of this.characters) {
            value += character.getSkill(name).level;
        }
        return value;
    };

    useSkill = function (name, xp) {
        for (const character of this.characters) {
            character.getSkill(name).addXp(xp);
        }
    };
}