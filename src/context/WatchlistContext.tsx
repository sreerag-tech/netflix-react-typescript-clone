import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/AuthContext";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const storageKey = useMemo(() => {
    const uid = user?.uid ?? "guest";
    return `watchlist:${uid}`;
  }, [user?.uid]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) {
        setWatchlist([]);
        return;
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        setWatchlist([]);
        return;
      }
      // Keep only the fields we actually rely on.
      const sanitized: Movie[] = parsed
        .filter((m) => m && typeof m === "object")
        .map((m: any) => ({
          id: Number(m.id),
          title: String(m.title ?? ""),
          poster: String(m.poster ?? ""),
        }))
        .filter((m) => Number.isFinite(m.id) && m.title.length > 0 && m.poster.length > 0);
      setWatchlist(sanitized);
    } catch {
      setWatchlist([]);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(watchlist));
    } catch {
      // ignore quota / private mode errors
    }
  }, [storageKey, watchlist]);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prev) =>
      prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) throw new Error("useWatchlist must be used inside provider");
  return context;
};