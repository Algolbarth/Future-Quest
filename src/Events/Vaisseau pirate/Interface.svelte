<script>
    import Battle from '../../Battle.svelte';
    export let System;
    System;

    function battle () {
        System.game.planet.event.step = "battle";
        System.game.battle.start(System);
    }

    function run () {
        System.game.ship.fuel -= System.game.ship.getPart("Moteurs").move();
        System.pages.change("Menu");
    }
</script>

{#if System.game.planet.event.step == "select"}
    Un vaisseau pirate vous attaque !
    <br/><br/>
    <button on:click={() => {battle()}}>L'affronter</button>
    <br/>
    {#if System.game.ship.fuel >= System.game.ship.getPart("Moteurs").move()}
        <button on:click={() => {run()}}>Fuir</button>
    {:else}
    <button class="lock">Fuir</button>
    {/if}
    <div class="cost">-{System.game.ship.getPart("Moteurs").move()} Carburant</div>
{:else if System.game.planet.event.step == "battle"}
    <svelte:component this={Battle} {System} />
{:else if System.game.planet.event.step == "victory"}
    Le vaisseau pirate est détruit, vous récupérez ce qu'il transportait.
    <br/>
    <div class="win">+ {System.game.planet.event.fuel} Carburant</div>
    <br/>
    <div class="win">+ {System.game.planet.event.steel} Acier</div>
    <br/>
    <div class="win">+ {System.game.planet.event.money} $</div>
    <br/><br/>
    <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
{/if}