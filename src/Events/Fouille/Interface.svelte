<script>
    export let System;
    System;

    let action = function () {
        System.game.steel += System.game.planet.event.steel;
        System.game.money += System.game.planet.event.money;
        System.game.ship.fuel -= System.game.ship.getPart("Moteurs").move();
        System.game.planet.event.step = "loot";
    }
</script>

{#if System.game.planet.event.step == "select"}
    Vous trouvez un campement abandonné sur la planète.
    <br/><br/>
    {#if System.game.ship.fuel >= System.game.ship.getPart("Moteurs").move()}
        <button on:click={() => {action()}}>Le fouiller</button>
    {:else}
        <button class="lock">Le fouiller</button>
    {/if}
    <div class="cost">-{System.game.ship.getPart("Moteurs").move()} Carburant</div>
    <br/>
    <button on:click={() => {System.pages.change("Menu")}}>Ne pas y aller</button>
{:else if System.game.planet.event.step == "loot"}
    {#if System.game.planet.event.money > 0 || System.game.planet.event.fuel > 0 || System.game.planet.event.steel > 0}
        Vous trouvez quelques ressources.
        <br/>
        {#if System.game.planet.event.fuel > 0}
            <div class="win">+ {System.game.planet.event.fuel} Carburant</div>
            <br/>
        {/if}
        {#if System.game.planet.event.steel > 0}
            <div class="win">+ {System.game.planet.event.steel} Acier</div>
            <br/>
        {/if}
        {#if System.game.planet.event.money > 0}
            <div class="win">+ {System.game.planet.event.money} $</div>
        {/if}
    {:else}
        Vous ne trouvez rien.
    {/if}
    <br/><br/>
    <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
{/if}