<script>
    import Bar from '../Bar.svelte';
    export let System;
    System;
</script>

<svelte:component this={Bar} name={"Vie"} value={System.game.ship.life} max={System.game.ship.life_max()} color={"green"}/>
{#if System.game.ship.shield_max() > 0}
    <svelte:component this={Bar} name={"Bouclier"} value={System.game.ship.shield} max={System.game.ship.shield_max()} color={"blue"}/>
{/if}