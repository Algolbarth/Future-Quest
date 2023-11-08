<script>
    export let name;
    export let value;
    export let max;
    export let color;
    name;
    value;
    max;
    color;

    $: ratio = parseInt(100*(value / max));
</script>

<div class="bar">
    <div class="value" style={"width:" + ratio + "%;background:" + color + ";"}></div>
</div>
{name} : {ratio}% ({value}/{max})

<style>
    .bar {
        border:solid;
        border-color:white;
        width:100%;
    }

    .value {
        border:none;
        margin:0;
        padding:0;
        height:1.5vh;
    }
</style>