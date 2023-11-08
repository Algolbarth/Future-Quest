import svelte from "./Interface.svelte";

export class Marchand {
    name = "Marchand";
    svelte = svelte;
    parts = [];
    step = "select";

    constructor(System, level) {
        let listPart = ["Bouclier", "Cannon léger", "Cannon lourd", "Laser", "Blindage", "Scanner", "Catalyseur", "Maintenance", "Extracteur", "Drone de combat", "Drone de réparation", "Aide à la visée"];
        for (let i = 0; i < 3; i++) {
            let index = parseInt(Math.random()*listPart.length);
            this.parts.push(System.parts.getByName(listPart[index]));
            listPart.splice(index, 1);
        }
    }
}