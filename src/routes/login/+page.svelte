<script>
  import { goto } from "$app/navigation";
  import Header from "../../components/Header.svelte";
  import { session } from "../../stores/session";

  let username = "";
  let password = "";
  let errorMessage = "";

  async function handleLogin() {
    if (username === "admin" && password === "admin") {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        const result = await response.json();
        session.set({ isLoggedIn: true, username: result.username });
        goto("/");
      } else {
        errorMessage = "Invalid username or password";
      }
    } else {
      errorMessage = "Invalid username or password";
    }
  }
</script>

<Header quote={""} />
<br />
<form on:submit|preventDefault={handleLogin}>
  <div>
    <label for="username">Username:</label>
    <input id="username" bind:value={username} />
  </div>
  <div>
    <label for="password">Password:</label>
    <input id="password" type="password" bind:value={password} />
  </div>
  {#if errorMessage}
    <div class="error">{errorMessage}</div>
  {/if}
  <button type="submit">Login</button>
</form>

<style>
  form {
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .error {
    color: red;
    margin-top: 0.5rem;
  }
</style>
