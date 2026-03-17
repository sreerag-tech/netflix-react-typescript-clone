// src/api/tmdb.ts
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchTrending = () =>
  tmdb.get(`/trending/movie/week?api_key=${API_KEY}`);