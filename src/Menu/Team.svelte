<script>
    import Character from './Character.svelte';
    export let System;
    System;
</script>

Équipage : ({System.game.ship.characters.length} / {System.game.ship.characters_max()})
<br/>
{#each System.game.ship.characters as character}
    <svelte:component this={Character} {character} {System} />
    <br/>
{/each}