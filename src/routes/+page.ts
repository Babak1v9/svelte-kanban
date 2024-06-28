export const load = async ({ fetch }) => {
  const res = await fetch("https://api.kanye.rest/");
  const data = await res.json();
  return { data };
};
