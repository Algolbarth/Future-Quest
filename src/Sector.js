export class Sector {
    name;
    slot;
    info = false;
    visited = false;
    steps = [];

    constructor(slot) {
        this.slot = slot;
    }
}