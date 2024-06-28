<script>
  import { goto } from "$app/navigation";
  import { session } from "../stores/session";

  export let quote;

  let isLoggedIn = false;
  let username = "";

  session.subscribe((value) => {
    isLoggedIn = value.isLoggedIn;
    username = value.username;
  });

  function login() {
    goto("/login");
  }

  function logout() {
    session.set({ isLoggedIn: false, username: "" });
    goto("/");
  }
</script>

<nav>
  <div class="menu">
    <h3><a href="/">Kanban Board</a></h3>
  </div>
  <div class="quote">{quote}</div>
  <div class="auth">
    {#if isLoggedIn}
      <span>User: {username}</span>
    {/if}
    {#if isLoggedIn}
      <button on:click={logout}>Logout</button>
    {:else}
      <button on:click={login}>Login</button>
    {/if}
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--base) var(--lg);
    background: var(--primary);
    color: var(--white);
  }
  .menu {
    display: flex;
    gap: var(--md);
    align-items: center;
  }
  h3 {
    margin: 0;
  }
  h3 a {
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
  }
  h3 a:hover {
    color: var(--accent);
  }
  .quote {
    flex: 1;
    text-align: center;
  }
  .auth {
    text-align: right;
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
