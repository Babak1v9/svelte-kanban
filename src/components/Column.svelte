<script>
  import { deleteColumn, store } from "../stores/store";
  import Cards from "./Cards.svelte";

  export let column;
  export let idx;

  function getNewCard() {
    return {
      id: `_${Math.random().toString(35).substr(2, 9)}`,
      title: "Card Title",
    };
  }

  function addCard(idx) {
    store.update((columns) => {
      columns[idx].cards = [getNewCard(), ...columns[idx].cards];
      return columns;
    });
  }
</script>

<header>
  <h2><input bind:value={column.title} /></h2>
  <button class="delete" on:click={() => deleteColumn(column.id)}>X</button>
</header>

<button on:click={() => addCard(idx)}>&plus; Hinzufügen</button>

<Cards {column} colIdx={idx} />

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary);
    color: var(--white);
    padding: var(--sm);
    border-radius: var(--sm);
    margin-bottom: var(--sm);
  }
  input {
    background: var(--white);
    color: var(--black);
    border: 1px solid var(--secondary);
    border-radius: var(--sm);
    padding: var(--xs);
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
  button {
    background: var(--accent);
    color: var(--white);
    border: none;
    padding: var(--sm) var(--md);
    border-radius: var(--sm);
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover {
    background: var(--secondary);
  }
</style>
