<script>
  import Header from "../components/Header.svelte";
  import Board from "../components/Board.svelte";
  import Columns from "../components/Columns.svelte";

  export let data;
  const quote = data.data.quote;
</script>

<Header {quote} />

<Board>
  <Columns />
</Board>
