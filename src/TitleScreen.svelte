<script>
    export let System;
    System;

    console.log(System.events.instance.length + " évenements");
    console.log(System.parts.instance.length + " modules");
</script>

<div class="center">
    <button on:click={() => System.pages.change("SelectStarter")}>Jouer</button>
</div>