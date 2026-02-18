export interface WordCloudState {
  words: string[];
  loading: boolean;
  error: string | null;
  setWords: (words: string[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}
