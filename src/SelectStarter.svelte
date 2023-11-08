<script>
    import {Game as GameClass} from './Game.js';
    export let System;
    System;

    let Starter = undefined;

    function selectShip (starter) {
        Starter = starter;
    }

    function newGame () {
        System.game = new GameClass(System);
        let starter = new System.starters.class[Starter](System);
        System.game.ship = starter.ship;
        System.game.jump(System.game.sector.steps[0][0]);
        System.pages.change("Menu");
    }
</script>

<div class="container">
    <div>
        <button on:click={() => System.pages.change("TitleScreen")}>Retour</button>
        <br/><br/>
        {#each System.starters.instance as s, i}
            <button on:click={() => selectShip(i)}>{s.name}</button>
            <br/>
        {/each}
    </div>
    <div class="description">
        {#if Starter != undefined}
            <div style="text-align:center;">
                {System.starters.instance[Starter].name}
            </div>
            <br/>
            <u>Équipage :</u>
            <br/>
            {#each System.starters.instance[Starter].ship.characters as character}
                {character.race}
                <div style="margin-left:3vw;">
                    {#each character.listSkill() as skill}
                        {skill.name} Lv {skill.level}
                        <br/>
                    {/each}
                </div>
            {/each}
            <br/>
            <u>Modules :</u>
            <br/>
            {#each System.starters.instance[Starter].ship.parts as part}
                {part.name} Lv {part.level}
                <br/>
            {/each}
            <br/>
            <div style="text-align:center;">
                <button on:click={() => newGame()}>Jouer</button>
            </div>
        {/if}
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .description {
        display:absolute;
        top:50%;
        transform:translate(0, 50%);
    }
</style>