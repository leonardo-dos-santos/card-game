export async function fetchGifs(query = "No Country for Old Men", limit = 8) {
  const API_KEY = "kDehIMwOv1nTGfWIovSbElQiVfGIp8Wo"; // sua chave Giphy
  const endpoint = "https://api.giphy.com/v1/gifs/search";

  const params = new URLSearchParams({
    api_key: API_KEY,
    q: query,
    limit: limit,
    rating: "g",
    lang: "en",
  });

  try {
    const res = await fetch(`${endpoint}?${params.toString()}`);
    if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);

    const { data } = await res.json();

    return data.map((item) => ({
      id: item.id,
      title: item.title || query,
      imgUrl:
        item.images?.downsized_medium?.url || // prioridade: medium
        item.images?.fixed_height?.url || // fallback: fixed height
        item.images?.original?.url || "", // último recurso
    }));
  } catch (error) {
    console.error("Erro ao buscar GIFs:", error);
    return [];
  }
}
