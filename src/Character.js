export class Character {
    name;
    race;
    sexe;
    life;
    life_max = function () {
        let value = 10;
        return value;
    };
    skills = [];

    constructor(System) {
        this.life = this.life_max();
        for (const skill of System.skills.class) {
            this.skills.push(new skill());
        }
    }

    listSkill = function () {
        let list = [];
        for (const skill of this.skills) {
            if (skill.level > 0) {
                list.push(skill);
            }
        }
        return list;
    }

    getSkill = function (name) {
        for (const skill of this.skills) {
            if (skill.name == name) {
                return skill;
            }
        }
    }
}