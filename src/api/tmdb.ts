const BASE_URL = "https://api.themoviedb.org/3";

export const tmdbFetch = async (endpoint: string) => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    if (!apiKey) {
        throw new Error("Missing VITE_TMDB_API_KEY");
    }

    const url = `${BASE_URL}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=${apiKey}`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("TMDB fetch failed");
    }

    return res.json();
};