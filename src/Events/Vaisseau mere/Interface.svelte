<script>
    import Battle from '../../Battle.svelte';
    export let System;
    System;

    function battle () {
        System.game.planet.event.step = "battle";
        System.game.battle.start(System);
    } 
</script>

{#if System.game.planet.event.step == "select"}
    Le vaisseau mère sort de la base ennemie, l'affrontement va commencer.
    <br/><br/>
    <button on:click={() => {battle()}}>L'affronter</button>
{:else if System.game.planet.event.step == "battle"}
    <svelte:component this={Battle} {System} />
{:else if System.game.planet.event.step == "victory"}
    {#if System.game.sector.slot == System.game.map.length - 1}
        Le vaisseau mère est détruit, vous récupérez ce qu'il transportait. Vous pouvez désormais accéder au secteur suivant.
        <br/>
        <div class="win">+ {System.game.planet.event.fuel} Carburant</div>
        <br/>
        <div class="win">+ {System.game.planet.event.steel} Acier</div>
        <br/>
        <div class="win">+ {System.game.planet.event.money} $</div>
        <br/><br/>
        <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
    {:else}
        Le vaisseau mère du dernier secteur est détruit. Votre voyage est terminé, vous avez rempli votre mission.
        <br/><br/>
        <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
    {/if}
{/if}