<script>
    import Bar from './Bar.svelte';
    export let System;
    System;
</script>

<div class="center">
    <button on:click={() => {System.pages.change("Menu")}}>Retour</button>
    <br/><br/>
    {System.game.character.name}
    <br/>
    {System.game.character.race} {System.game.character.sexe}
    <br/><br/>
    <svelte:component this={Bar} name={"Vie"} value={System.game.character.life} max={System.game.character.life_max()} color={"green"}/>
    <br/><br/>
    {#each System.game.character.listSkill() as skill}
        {skill.name} Lv {skill.level}
        <br/>
        <svelte:component this={Bar} name={"Expérience"} value={skill.xp} max={100} color={"cyan"}/>
        <br/>
        <div style="margin-left:3vw;">
            {skill.description}
        </div>
    {/each}
</div>