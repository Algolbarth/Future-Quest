import {Character as CharacterClass} from '../Character.js';

export class Humain extends CharacterClass {
    race = "Humain";

    constructor (System) {
        super(System);
        this.sexe = "Homme";
        let listName = ["Alexandre", "Antoine", "Aurélien", "Bastien", "Clément", "Daniel", "David", "Guillaume", "Gabriel", "Hector", "Jean", "Justin", "Laurent", "Lucien", "Ludovic", "Marc", "Martin", "Nicolas", "Oscar", "Paul", "Phillipe", "Simon", "Xavier"];
        if (Math.random() < 0.5) {
            this.sexe = "Femme";
            listName = ["Adèle", "Agathe", "Anne", "Béatrice", "Betty", "Caroline", "Claire", "Clara", "Clémence", "Clémentine", "Diane", "Gaëlle", "Heloise", "Jane", "Jeanne", "Julie", "Justine", "Laure", "Laurence", "Léa", "Lucie", "Manon", "Marie", "Marina", "Marine", "Nadine", "Noémie", "Ondine", "Orélie", "Paula", "Philippine", "Sarah", "Simone", "Zara"];
        }
        this.name = listName[Math.floor(Math.random()*listName.length)];
    }
}