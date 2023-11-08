<script>
    export let System;
    System;

    function next (planet) {
        System.game.jump(planet);
        System.pages.change("Event");
    }
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/><br/>
    <div class="sector">
        {#each System.game.sector.steps as step, i}
            <div class="step">
                <div>
                    Étape {i}
                </div>
                {#each step as planet}
                    <div class="planet">
                        {#if i == System.game.planet.step + 1}
                            <button class="next" on:click={() => {next(planet)}}>
                                {#if planet.info}{planet.name}{:else}???{/if}
                            </button>
                        {:else}
                            {#if planet == System.game.planet}
                                <div class="current">
                                    {planet.name}
                                </div>
                            {:else if planet.visited}
                                <div class="visited">
                                    {planet.name}
                                </div>
                            {:else}
                                {#if planet.info}{planet.name}{:else}???{/if}
                            {/if}
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .sector {
        display:grid;
        grid-template-rows: auto;
        row-gap: 2vh;
        width:50vw;
    }

    .step {
        display:grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .planet {
        text-align:center;
    }

    .current {
        color:red;
    }

    .visited {
        color:yellow;
    }

    .next {
        color:green;
        font-weight: bold;
        background:none;
        border:none;
        margin:0;
        padding:0;
    }
</style>