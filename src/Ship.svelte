<script>
    export let System;
    System;
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/>
    {System.game.ship.name}
    <br/><br/>
    Vie maximale : {System.game.ship.life_max()}
    <br/>
    {#if System.game.ship.shield_max() > 0}
        Bouclier maximal : {System.game.ship.shield_max()}
        <br/>
    {/if}
    {#if System.game.ship.defense() > 0}
        Réduction de dégât : {System.game.ship.defense()}
        <br/>
    {/if}
    Chance d'equive : {100*System.game.ship.avoid()}%
    <br/>
    {#if System.game.ship.accuracy() > 0}
        Précision bonus : {System.game.ship.accuracy()}
        <br/>
    {/if}
    Énergie maximale : {System.game.ship.energy_max()}
    <br/>
</div>