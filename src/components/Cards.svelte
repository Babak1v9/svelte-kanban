<script>
  import { flip } from "svelte/animate";
  import { store } from "../stores/store";
  import { dndzone } from "svelte-dnd-action";
  import Card from "./Card.svelte";

  export let column;
  export let colIdx;

  function handleDndConsiderCards(e) {
    $store[colIdx].cards = e.detail.items;
    $store[colIdx].cards = [...$store[colIdx].cards];
  }
  function handleDndFinalizeCards(e) {
    $store[colIdx].cards = e.detail.items;
    $store[colIdx].cards = [...$store[colIdx].cards];
  }
</script>

<article
  {colIdx}
  use:dndzone={{ items: column.cards }}
  on:consider={handleDndConsiderCards}
  on:finalize={handleDndFinalizeCards}
>
  {#each column.cards as card, cardIdx (card.id)}
    <section
      class="card"
      animate:flip={{ duration: 300 }}
      id={card.id}
      {cardIdx}
    >
      <Card {colIdx} {card} {cardIdx} />
    </section>
  {/each}
</article>

<style>
  article {
    height: 100%;
    min-height: 200px;
    overflow-y: auto;
    padding: var(--sm);
  }
  .card {
    cursor: move;
    background: var(--white);
    border-radius: var(--sm);
    color: var(--black);
    padding: var(--base);
    margin-bottom: var(--sm);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
