import {Skill as SkillClass} from '../Skill.js';

export class Combat extends SkillClass {
    name = "Combat";
    description = "Augmente les dégâts réalisés lors d'un combat.";

    constructor (level) {
        super(level);
    }
}