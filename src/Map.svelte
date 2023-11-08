<script>
    export let System;
    System;

    function next (sector) {
        System.game.sector = sector;
        System.game.sector.info = true;
        System.game.sector.visited = true;
        System.game.jump(sector.steps[0][0]);
        System.pages.change("Menu");
    }
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/>
    <div class="map">
        {#each System.game.map as stage, i}
            <div class="stage">
                <div>
                    Secteur {i+1}
                </div>
                {#each stage as sector}
                    <div class="sector">
                        {#if (i == System.game.sector.slot + 1) && (System.game.planet.step == System.game.sector.steps.length - 1)}
                            <button class="next" on:click={() => {next(sector)}}>
                                {sector.name}
                            </button>
                        {:else}
                            {#if sector == System.game.sector}
                                <div class="current">
                                    {sector.name}
                                </div>
                            {:else if sector.visited}
                                <div class="visited">
                                    {sector.name}
                                </div>
                            {:else}
                                {#if sector.info}{sector.name}{:else}???{/if}
                            {/if}
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .map {
        display:grid;
        grid-template-rows: auto;
        row-gap: 2vh;
        width:50vw;
    }

    .stage {
        display:grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .sector {
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