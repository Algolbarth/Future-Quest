export class Skill {
    name;
    level;
    description;
    xp = 0;

    constructor(level = 0) {
        this.level = level;
    }

    addXp = function (value) {
        if (this.level > 0 && this.level < 10) {
            this.xp += value;
            if (this.xp > 100) {
                this.xp -= 100;
                this.level++;
            }
        }
    }
}