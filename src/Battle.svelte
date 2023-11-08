<script>
    import Bar from './Bar.svelte';
    export let System;
    System;

    $:ship = System.game.ship;
    $:ennemy = System.game.planet.event.ennemy;
</script>

<div style="width:50vw;">
    <center>{ennemy.name}</center>
    <svelte:component this={Bar} name={"Vie"} value={ennemy.life} max={ennemy.life_max()} color={"green"}/>
    <br/>
    {#if ennemy.shield_max() > 0}
        <svelte:component this={Bar} name={"Bouclier"} value={ennemy.shield} max={ennemy.shield_max()} color={"blue"}/>
        <br/>
    {/if}
    <svelte:component this={Bar} name={"Énergie"} value={ennemy.energy} max={ennemy.energy_max()} color={"yellow"}/>
    <br/><br/><br/>
    <!-- SELECT -->
    {#if System.game.battle.phase == "select"}

        <div class="container">

            <!-- PART ACTIONS -->
            {#each ship.parts as part}
                {#if part.weapon}
                    <div>
                        {#if part.attack.need(ship)}
                            <button on:click={() => {System.game.battle.attack(part)}}>{part.name}</button>
                        {:else}
                            <button class="lock">{part.name}</button>
                        {/if}
                    </div>
                    <div>
                        {part.attack.description()}
                        <div class="cost">{part.attack.cost()}</div>
                    </div>
                {/if}
            {/each}

            <!-- DODGE -->
            <div>
                {#if !System.game.ship.dodge && System.game.ship.fuel >= 5}
                    <button on:click={() => {System.game.battle.dodge(System.game.ship)}}>Esquive</button>
                {:else}
                    <button class="lock">Esquive</button>
                {/if}
            </div>
            <div>
                Augmente le taux d'esquive de 15% jusqu'au prochain tour de combat.
                <div class="cost">-5 Carburant</div>
            </div>

            <!-- NEXT TURN -->
            <div>
                <button on:click={() => {System.game.battle.nextTurn()}}>Tour suivant</button>
            </div>
            <div></div>
            
            <!-- RUN -->
            <div>
                {#if System.game.ship.fuel >= System.game.ship.getPart("Moteurs").move()}
                    <button on:click={() => {System.game.battle.run()}}>Fuir</button>
                {:else}
                    <button class="lock">Fuir</button>
                {/if}
            </div>
            <div>
                <div class="cost">-{System.game.ship.getPart("Moteurs").move()} Carburant</div>
            </div>

        </div>

    <!-- RESULT -->
    {:else if ["start", "result", "ennemy"].includes(System.game.battle.phase)}
        {System.game.battle.action_result}
        <br/><br/>
        <button on:click={() => {System.game.battle.check()}}>Ok</button>

    <!-- VICTORY -->
    {:else if System.game.battle.phase == "victory"}
        {ennemy.name} est détruit !
        <br/><br/>
        <button on:click={() => {System.game.battle.finish()}}>Ok</button>

    <!-- DEFEAT -->
    {:else if System.game.battle.phase == "defeat"}
        Votre vaisseau est détruit...
        <br/><br/>
        <button on:click={() => {System.pages.change("GameOver")}}>Ok</button>

    <!-- RUN -->
    {:else if System.game.battle.phase == "run"}
        Vous avez réussi à fuir le combat.
        <br/><br/>
        <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
    {/if}

    <br/><br/>
    <center>{ship.name}</center>
    <svelte:component this={Bar} name={"Énergie"} value={ship.energy} max={ship.energy_max()} color={"yellow"}/>
    <br/>
    {#if ship.shield_max() > 0}
        <svelte:component this={Bar} name={"Bouclier"} value={ship.shield} max={ship.shield_max()} color={"blue"}/>
        <br/>
    {/if}
    <svelte:component this={Bar} name={"Vie"} value={ship.life} max={ship.life_max()} color={"green"}/>
    <div style="text-align:right">{ship.fuel} Carburant</div>
</div>

<style>
    .container {
        display:grid;
        grid-template-columns: 1fr 3fr;
    }
</style>