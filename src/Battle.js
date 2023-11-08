export class Battle {
    phase = "";
    step = 0;
    stop = false;
    action_result = "";

    constructor(game) {
        this.game = game;
    };

    next = function (phase) {
        this.phase = phase;
        this.game.System.pages.change("Event");
    };

    check = function () {
        if (this.game.ship.life <= 0) {
            this.phase = "defeat";
            this.game.System.pages.change("Event");
        }
        else if (this.game.planet.event.ennemy.life <= 0) {
            this.phase = "victory";
            this.game.System.pages.change("Event");
        }
        else {
            if (this.phase == "start") {
                this.startTurn();
            }
            else if (this.phase == "result") {
                this.next("select");
            }
            else if (this.phase == "ennemy") {
                this.ennemyTurn()
            }
        }
    };

    start = function () {
        this.step = 0;
        this.game.ship.energy = this.game.ship.energy_max();
        this.game.planet.event.ennemy.energy = this.game.planet.event.ennemy.energy_max();
        this.startTurn();
    };

    startTurn = function () {
        this.game.ship.dodge = false;
        if (this.step < 1) {
            this.step = 1;
            if (this.game.ship.checkPart("Drone de combat")) {
                console.log("test")
                this.action_result = this.game.ship.getPart("Drone de combat").action(this.game.ship, this.game.planet.event.ennemy);
                this.next("start");
                return 0;
            }
        }
        if (this.step < 2) {
            this.step = 2;
            if (this.game.ship.checkPart("Drone de réparation")) {
                this.action_result = this.game.ship.getPart("Drone de réparation").action(this.game.ship);
                this.next("start");
                return 0;
            }
        }
        this.step = 0;
        this.next("select");
    };

    attack = function (weapon) {
        this.action_result = weapon.attack.use(this.game.ship, this.game.planet.event.ennemy);
        this.next("result");
    };

    dodge = function (ship) {
        ship.dodge = true;
        ship.fuel -= 5;
        this.action_result = ship.name + " effectue une manoeuvre d'esquive.";
        ship.useSkill("Pilotage", 20);
        this.next("result");
    };

    nextTurn = function () {
        this.game.ship.energy = this.game.ship.energy_max();
        this.stop = true;
        this.ennemyTurn();
    };

    run = function () {
        this.game.ship.fuel -= this.game.ship.getPart("Moteurs").move();
        if (Math.random() < 0.5) {
            this.action_result = this.game.ship.name + " tente de s'enfuir mais " + this.game.planet.event.ennemy.name + " le rattrape.";
            this.next("result");
        }
        else {
            this.next("run");
        }
    };

    ennemyTurn = function () {
        for (let i = this.step; i < this.game.planet.event.ennemy.parts.length; i++) {
            let part = this.game.planet.event.ennemy.parts[i];
            if (part.weapon) {
                if (part.attack.need(this.game.planet.event.ennemy)) {
                    this.stop = false;
                    this.action_result = part.attack.use(this.game.planet.event.ennemy, this.game.ship);
                    this.next("ennemy");
                    return 0;
                }
            }
        }
        if (!this.stop) {
            this.step = 0;
            this.stop = true;
            this.ennemyTurn();
        }
        else {
            this.game.planet.event.ennemy.energy = this.game.planet.event.ennemy.energy_max();
            this.startTurn();
        }
    };

    finish = function () {
        this.game.planet.event.step = "victory";
        this.game.planet.event.win(this.game.System);
        this.game.System.pages.change("Event");
    };
}