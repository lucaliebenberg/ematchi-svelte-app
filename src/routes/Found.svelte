<script lang="ts">
	import { receive } from "./transitions";


	import { get_twemoji_url } from "./utils";

    export let found: string[]
</script>

<div class="found">
    {#each found as emoji (emoji)}
    <div class="pair">
        <img
        in:receive={{ key: `${emoji}:a` }} 
        alt={emoji} 
        src={get_twemoji_url(emoji)} 
        />
        <img
        in:receive={{ key: `${emoji}:b` }} 
        alt={emoji} 
        src={get_twemoji_url(emoji)} 
        />
        
    </div>
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        height: 100%;
    }

    .pair {
        width: 4em;
        height: 4em;
    }
    
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>