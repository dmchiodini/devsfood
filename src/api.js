let BASE = "https://api.b7web.com.br/devsfood/api";

export default {
  getCategories: async () => {
    // GET /categories
    const res = await fetch(BASE + "/categories");
    const json = await res.json();
    return json;
  },
  getProducts: async (category, page, search) => {
    //GET /products ([search, page, category])
    let queryString = new URLSearchParams([
      ["category", category],
      ["page", page],
      ["search", search],
    ]);

    const res = await fetch(BASE + "/products?" + queryString);
    const json = await res.json();
    return json;
  },
};
