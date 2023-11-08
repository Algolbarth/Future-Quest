<script>
    export let System;
    System;

    $:part = System.game.part;
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/><br/>
    {System.game.part.name}
    <br/>
    {System.game.part.description}
    <br/><br/>
    {#each System.game.part.levels as level}
        {#if level.level != System.game.part.level}
            <div class="inactif">Lv {level.level} : {level.text}</div>
        {:else}
            Lv {level.level} : {level.text}
        {/if}
        <br/>
    {/each}
    <br/>
    {#if part.level < part.levels.length}
        {#if System.game.steel >= part.levels[part.level].price}
            <button on:click={() => {
                System.game.steel -= part.levels[part.level].price;
                part.upgrade(System);
            }}>Améiorer</button>
        {:else}
            <button class="lock">Améliorer</button>
        {/if}
        <div class="cost">-{part.levels[part.level].price} Acier</div>
    {:else}
        Niveau max. atteint
    {/if}
    <br/><br/>
    {#if System.game.part.weapon}
        Action en combat
        <br/>
        {System.game.part.attack.description()}
        <div class="cost">{System.game.part.attack.cost()}</div>
    {/if}
</div>

<style>
    .inactif {
        display:inline;
        color:grey;
    }
</style>