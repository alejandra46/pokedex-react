import { createContext, useContext, useState, type ReactNode } from "react";

interface Pokemon {
  name: string;
  image: string;
  type: string;
}

interface FavoriteContextType {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  const addFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => [...prev, pokemon]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoriteProvider");
  }

  return context;
}