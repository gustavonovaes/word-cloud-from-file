import { useCallback } from "react";
import { useWordCloudStore } from "../stores/wordCloudStore";

const regexAnyNotWordWithAccent = /[^\wÀ-ÿ]+/g;
const regexNumber = /^\d+|\d+$/g;
const regexSymbols = /[.,;:!?(){}\[\]'"“”‘’\-–—_@#$%^&*+=<>\\/|~`]/g;

export const useWordCloud = () => {
  const { words, loading, error, setWords, reset } = useWordCloudStore();

  const parseFile = useCallback((content: string) => {
    const contentWords: string[] = content.toLowerCase().split(/(,|\s)+/);

    const filteredWords = contentWords
      .filter((word) => word.length > 2)
      .map((word) =>
        word
          .replace(regexSymbols, "")
          .replace(regexNumber, "")
          .replace(regexAnyNotWordWithAccent, ""),
      )
      .filter((word) => word);

    return filteredWords;
  }, []);

  return {
    words,
    loading,
    error,
    parseFile,
    setWords,
    reset,
  };
};
