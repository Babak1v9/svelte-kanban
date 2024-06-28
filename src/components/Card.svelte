<script>
  import { store } from "../stores/store";

  export let card;
  export let colIdx;
  export let cardIdx;

  function deleteCard(colIdx, cardIdx) {
    store.update((columns) => {
      columns[colIdx].cards.splice(cardIdx, 1);
      return columns;
    });
  }

  function updateCardTitle(event) {
    const newTitle = event.target.value;
    store.update((columns) => {
      columns[colIdx].cards[cardIdx].title = newTitle;
      return columns;
    });
  }
</script>

<div class="card-content">
  <header>
    <input type="text" bind:value={card.title} on:input={updateCardTitle} />
    <button class="delete" on:click={() => deleteCard(colIdx, cardIdx)}
      >X</button
    >
  </header>
</div>

<style>
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    flex: 1;
    background: var(--white);
    color: var(--black);
    border: 1px solid var(--secondary);
    border-radius: var(--sm);
    padding: var(--xs);
    margin-right: var(--sm);
  }
  .delete {
    background: var(--error);
    color: var(--white);
    border: none;
    padding: 0 var(--sm);
    border-radius: var(--sm);
    cursor: pointer;
  }
  .delete:hover {
    background: var(--error);
    opacity: 0.8;
  }
</style>
