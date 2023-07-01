<script lang="ts">
    export let emoji: string;
</script>

<div class="square">
    <span>{emoji}</span>
</div>


<style>
    .square {
        display: flex;
        justify-content: center;
        align-items: center;
        background: yellow;
    }

    span { 
        font-size: 5em
    }
</style>