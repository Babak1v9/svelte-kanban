// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      session: {
        isLoggedIn: boolean;
        username: string;
      };
    }
    interface PageData {
      session: {
        isLoggedIn: boolean;
        username: string;
      };
    }
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
