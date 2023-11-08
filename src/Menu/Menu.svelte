<script>
    import LifeBar from './LifeBar.svelte';
    import Team from './Team.svelte';
    import Ship from './Ship.svelte';
    export let System;
    System;
</script>

<div class="container">
    <div class="status">
        <div>
            <svelte:component this={LifeBar} {System} />
        </div>
        <div style="text-align:right;">
            {System.game.ship.fuel} Carburant
            <br/>
            {System.game.steel} Acier
            <br/>
            {System.game.money} $
        </div>
    </div>
    <div class="map">
        <button on:click={() => {System.pages.change("Sector")}}>Système solaire</button>
        <button on:click={() => {System.pages.change("Map")}}>Galaxie</button>
    </div>
    <div class="team">
        <svelte:component this={Team} {System} />
    </div>
    <div class="ship">
        <svelte:component this={Ship} {System} />
    </div>
</div>

<style>
    .container {
        display:grid;
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
        row-gap: 2vh;
        column-gap: 1vw;
    }

    .status {
        grid-row: 1 / 2;
        grid-column: 1 / 11;
        display : grid;
        grid-template-columns: 1fr 0.25fr;
    }

    .map {
        text-align:center;
        grid-row: 3;
        grid-column: 1 / 11;
    }

    .team {
        grid-row: 4 / 11;
        grid-column: 1 / 3;
    }

    .ship {
        grid-row: 4 / 11;
        grid-column: 3 / 11;
    }
</style>