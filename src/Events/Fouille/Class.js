import svelte from "./Interface.svelte";

export class Fouille {
    name = "Fouille";
    svelte = svelte;
    steel;
    money;
    step 
    step = "select";

    constructor (System, level) {
        this.steel = 5*level + parseInt(Math.random()*5*level);
        this.money = 5*level + parseInt(Math.random()*5*level);
    }
}