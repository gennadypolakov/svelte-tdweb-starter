<script lang="ts">
    import { setContext } from 'svelte';
    import Tg from './Tg';

    let client = new Tg();
    let started = false;
    client.action = () => started = true;
    setContext('tgClient', new Tg());
</script>

<main>
    <h1>Svelte TdLib starter</h1>
    {#if started}
        <p>TdLib client was started</p>
    {:else}
        <p>TdLib client is starting...</p>
    {/if}
</main>

<style lang="scss">
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;

        h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }

        @media (min-width: 640px) {
            max-width: none;
        }
    }
</style>
