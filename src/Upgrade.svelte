<script>
    export let System;
    System;
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/><br/>
    Choississez un module à améliorer :
    <br/><br/>
    {System.game.steel} Acier
    <br/><br/>
    <div class="container">
        {#each System.game.ship.parts as part}
            {#if part.level < part.levels.length}
                <div>
                    {#if System.game.steel >= part.levels[part.level].price}
                        <button on:click={() => {
                            System.game.steel -= part.levels[part.level].price;
                            part.upgrade(System);
                        }}>{part.name} Nv {part.level} => {part.level + 1}</button>
                    {:else}
                        <button class="lock">{part.name} Nv {part.level} => {part.level + 1}</button>
                    {/if}
                </div>
                <div class="cost info">
                    -{part.levels[part.level].price} Acier
                </div>
            {:else}
                <div>
                    <button>{part.name} Nv {part.level}</button>
                </div>
                <div class="info">
                    Niveau max. atteint
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .container {
        display:grid;
        text-align:left;
        grid-template-columns: 1fr 1fr;
    }

    .info {
        top:0%;
        transform:translate(0, 22%);
        padding-left:10px;
    }
</style>