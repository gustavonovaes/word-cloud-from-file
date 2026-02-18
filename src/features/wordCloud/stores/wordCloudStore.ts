import { create } from "@lib/zustand";
import { WordCloudState } from "../types";

export const useWordCloudStore = create<WordCloudState>()((set) => ({
  words: [],
  loading: false,
  error: null,
  setWords: (words: string[]) => set({ words }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  reset: () =>
    set({
      words: [],
      loading: false,
      error: null,
    }),
}));
