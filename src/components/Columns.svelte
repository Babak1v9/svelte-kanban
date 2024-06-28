<script>
  import { flip } from "svelte/animate";
  import Column from "./Column.svelte";
  import { store } from "../stores/store";
  import { dndzone } from "svelte-dnd-action";
  import { get } from "svelte/store";

  let columns = [];
  store.subscribe((value) => {
    columns = value;
  });

  function handleDndConsiderColumns(e) {
    store.set(e.detail.items);
  }

  function handleDndFinalizeColumns(e) {
    store.set(e.detail.items);
  }
</script>

<div
  use:dndzone={{ items: columns, type: "columns" }}
  on:consider={handleDndConsiderColumns}
  on:finalize={handleDndFinalizeColumns}
>
  {#each columns as column, idx (column.id)}
    <section class="col" id={column.id} animate:flip={{ duration: 300 }}>
      <Column {column} {idx} />
    </section>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: var(--base);
  }
  section {
    margin-right: var(--lg);
    height: 100%;
    box-shadow: var(--shadow);
    border-radius: var(--lg);
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    background: var(--white);
    padding: var(--base);
  }
  .col {
    user-select: none;
    border-radius: var(--lg);
    height: 100%;
    min-width: 300px;
    background: var(--white);
    color: var(--text);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--base);
    align-items: start;
    align-content: flex-start;
    padding: var(--base);
  }
</style>
