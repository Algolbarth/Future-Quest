<script>
    export let System;
    System;

    function see (part) {
        System.game.part = part;
        System.pages.change("Part");
    }
</script>

<div class="title">
    <button on:click={() => (System.pages.change("Ship"))}>{System.game.ship.name}</button>
    <button on:click={() => (System.pages.change("Upgrade"))}>Améliorer</button>
</div>
<br/>
<div class="container">
    {#each System.game.ship.parts as part}
        <button class="part" on:click={() => {see(part)}} on:keydown>
            <div>
                {part.name}
            </div>
            <div style="text-align:right;">
                Lv {part.level}
            </div>
        </button>
    {/each}
</div>

<style>
    .title {
        text-align:center;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        column-gap: 1vw;
        row-gap: 1vh;
    }

    .part {
        display: grid;
        text-align:left;
        grid-template-columns: repeat(2, 1fr);
    }
</style>