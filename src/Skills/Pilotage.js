import {Skill as SkillClass} from '../Skill.js';

export class Pilotage extends SkillClass {
    name = "Pilotage";
    description = "Augmente les chances d'esquiver une attaque ou un choc.";

    constructor (level) {
        super(level);
    }
}