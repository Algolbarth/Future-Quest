export class Part {
    name;
    level;
    levels = [];
    description;
    weapon = false;

    constructor (level = 1) {
        this.level = level;
    }

    add = function (System, ship) {};

    upgrade = function (System) {
        this.level++;
        this.upgradeEffect(System);
    };

    upgradeEffect = function (System) {};
}