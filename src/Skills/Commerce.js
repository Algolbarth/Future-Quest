import {Skill as SkillClass} from '../Skill.js';

export class Commerce extends SkillClass {
    name = "Commerce";
    description = "Diminue les prix chez les marchands.";

    constructor (level) {
        super(level);
    }
}