export class Planet {
    name;
    step;
    info = false;
    visited = false;
    event;

    constructor (step) {
        this.step = step;
    }
}