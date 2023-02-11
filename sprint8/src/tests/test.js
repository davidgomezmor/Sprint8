const fetch = require("node-fetch");

test("API returns a list of starships", async () => {
  const response = await fetch("https://swapi.dev/api/starships/");
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data.count).toBeGreaterThan(0);
  expect(data.results).toBeInstanceOf(Array);
});