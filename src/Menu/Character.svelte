<script>
    export let System;
    export let character;
    System;
    character;

    function see () {
        System.game.character = character;
        System.pages.change("Character");
    }
</script>

<button on:click={() => {see()}}>
    {character.name}
    <br/>
    {character.race}
</button>

<style>
    button {
        text-align: left;
        width:100%;
    }
</style>