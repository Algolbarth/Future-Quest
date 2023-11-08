<script>
    export let System;
    System;

    let damage_result;

    let action1 = function () {
        System.game.ship.fuel -= System.game.ship.getPart("Moteurs").move();
        System.pages.change("Menu");
    }

    let action2 = function () {
        if (Math.random() < 0.5) {
            damage_result = System.game.ship.damage(3);
            System.game.planet.event.step = "hit";
        }
        else {
            System.pages.change("Menu");
        }
    }
</script>

{#if System.game.planet.event.step == "select"}
    Le champ d'astéroides est particulièrement dense. Voulez vous le contourner ou bien poursuivre votre route ?
    <br/><br/>
    {#if System.game.ship.fuel >= System.game.ship.getPart("Moteurs").move()}
        <button on:click={() => {action1()}}>Le coutourner</button>
    {:else}
    <button class="lock">Le coutourner</button>
    {/if}
    <div class="cost">-{System.game.ship.getPart("Moteurs").move()} Carburant</div>
    <br/>
    <button on:click={() => {action2()}}>Ne pas dévier</button>
{:else if System.game.planet.event.step == "hit"}
    Votre vaisseau heurte un astéroide sur le chemin, qui occasione {damage_result.total} dégâts.
    <br/><br/>
    <button on:click={() => {System.pages.change("Menu")}}>Ok</button>
{/if}