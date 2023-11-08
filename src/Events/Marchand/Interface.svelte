<script>
    import Bar from "../../Bar.svelte";
    export let System;
    System;

    function repareSteel () {
        System.game.steel -= 3;
        System.game.ship.heal(1);
    }

    function repareMoney () {
        buy(price(3));
        System.game.ship.useSkill("Commerce", 2);
        System.game.ship.heal(1);
    }

    function buyFuel () {
        buy(price(10));
        System.game.ship.useSkill("Commerce", 2);
        System.game.ship.fuel += 10;
    }

    function buySteel () {
        buy(price(10));
        System.game.ship.useSkill("Commerce", 2);
        System.game.steel += 10;
    }

    function price (value) {
        return Math.round(value*(1 - 0.05*System.game.ship.totalSkill("Commerce")));
    }

    function buy (value) {
        System.game.money -= value;
    }
</script>

{#if System.game.planet.event.step == "select"}
    Vous croisez un vaisseau marchand.
    <br/><br/>
    <button on:click={() => {System.game.planet.event.step="shop"}}>L'accoster</button>
    <br/>
    <button on:click={() => {System.pages.change("Menu")}}>Ne pas s'arrêter</button>
{:else if System.game.planet.event.step == "shop"}
    Le vaisseau vous propose différents modules, ressources et peut améliorer votre vaisseau.
    <br/><br/>
    <button on:click={() => {System.game.planet.event.step = "repare"}}>Réparer le vaisseau</button>
    <br/>
    <button on:click={() => {System.game.planet.event.step = "ressources"}}>Acheter des ressources</button>
    <br/>
    <button on:click={() => {System.game.planet.event.step = "buy"}}>Acheter de nouveaux modules</button>
    <br/>
    <button on:click={() => {System.pages.change("Menu")}}>Partir</button>
{:else if System.game.planet.event.step == "repare"}
    Réparer les dégâts occasionnés à votre vaisseau :
    <br/><br/>
    <svelte:component this={Bar} name={"Vie"} value={System.game.ship.life} max={System.game.ship.life_max()} color={"green"}/>
    <br/>
    {System.game.steel} Acier
    <br/>
    {System.game.money} $
    <br/><br/>
    <button on:click={() => {System.game.planet.event.step = "shop"}}>Retour</button>
    <br/>
    {#if System.game.ship.life < System.game.ship.life_max() && System.game.steel >= 3}
        <button on:click={() => {repareSteel()}}>1 Point de vie</button>
    {:else}
        <button class="lock">1 Point de vie</button>
    {/if}
    <div class="cost">-3 Acier</div>
    <br/>
    {#if System.game.ship.life < System.game.ship.life_max() && System.game.money >= price(3)}
        <button on:click={() => {repareMoney()}}>1 Point de vie</button>
    {:else}
        <button class="lock">1 Point de vie</button>
    {/if}
    <div class="cost">-{price(3)} $</div>
{:else if System.game.planet.event.step == "ressources"}
    Achetez les différentes ressources disponibles :
    <br/>
    {System.game.ship.fuel} Carburant
    <br/>
    {System.game.steel} Acier
    <br/>
    {System.game.money} $
    <br/><br/>
    <button on:click={() => {System.game.planet.event.step = "shop"}}>Retour</button>
    <br/>
    {#if System.game.money >= price(10)}
        <button on:click={() => {buyFuel()}}>10 Carburant</button>
    {:else}
        <button class="lock">10 Carburant</button>
    {/if}
    <div class="cost">-{price(10)} $</div>
    <br/>
    {#if System.game.money >= price(10)}
        <button on:click={() => {buySteel()}}>10 Acier</button>
    {:else}
        <button class="lock">10 Acier</button>
    {/if}
    <div class="cost">-{price(10)} $</div>
{:else if System.game.planet.event.step == "buy"}
    Choississez un nouveau module à acheter :
    <br/>
    {System.game.money} $
    <br/><br/>
    <button on:click={() => {System.game.planet.event.step = "shop"}}>Retour</button>
    <br/>
    <div class="container">
        {#each System.game.planet.event.parts as part}
            {#if !System.game.ship.checkPart(part.name)}
                <div>
                    {#if System.game.money >= price(part.levels[0].price)}
                        <button on:click={() => {
                            buy(price(part.levels[0].price));
                            System.game.ship.useSkill("Commerce", 50);
                            System.game.ship.addPart(System, System.parts.getByName(part.name));
                        }}>{part.name}</button>
                    {:else}
                        <button class="lock">{part.name}</button>
                    {/if}
                </div>
                <div>
                    <div class="cost">-{price(part.levels[0].price)} $</div>
                </div>
            {:else}
                <div>
                    <button>{part.name}</button>
                </div>
                <div>
                    Déjà acquis
                </div>
            {/if}
            <div>
                {part.description}
            </div>
        {/each}
    </div>
{/if}

<style>
    .container {
        display:grid;
        grid-template-columns:2fr 1fr 4fr;
    }
</style>