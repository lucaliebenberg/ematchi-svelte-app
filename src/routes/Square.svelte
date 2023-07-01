<script lang="ts">
	import { get_twemoji_url } from "./utils";

    export let emoji: string;
    export let selected: boolean;
    export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
    <button on:click />

    {#if !found}
       <img alt={emoji} src={get_twemoji_url(emoji)} />
    {/if}
</div>


<style>
    .square {
        display: flex;
        justify-content: center;
        align-items: center;
        background: yellow;
    }

    .flipped button {
        background: red;
    }

    button {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    img { 
        width: 5em;
        height: 5em;
        pointer-events: none;
    }
</style>