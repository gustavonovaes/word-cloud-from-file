import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { useForm } from "@shared/hooks/useForm";

import Input from "@components/ui/Input";

import { useWordCloud } from "../hooks/useWordCloud";

const uploadSchema = z.object({
  file: z.any(), // FIXME: zod doesn't have a built-in file type, so we use z.any() and handle validation in the component
});

type UploadForm = z.infer<typeof uploadSchema>;

const FileUploader = () => {
  const { parseFile, error, words, setWords } = useWordCloud();
  const {
    register,
    formState: { errors },
  } = useForm<UploadForm>(uploadSchema);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const parseExcludedWords = (excluded: string) => {
    return excluded
      .split(/,|\s+/)
      .map((w) => w.trim())
      .filter((w) => w);
  };

  useEffect(() => {
    const excluded = searchParams.get("excluded");
    if (excluded) {
      const excludedWords = parseExcludedWords(excluded);
      setInputValue(excludedWords.join(", "));

      const filteredWords = words.filter(
        (word) => !excludedWords.includes(word.toLowerCase()),
      );
      setWords(filteredWords);
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const text = event.target?.result as string;
      const words = parseFile(text);
      setWords(words);
    };
    fileReader.onerror = (error) => {
      console.error("handleFileChange - Error reading file:", error);
    };
    fileReader.readAsText(file);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const params = new URLSearchParams(searchParams);
    const excludedWords = parseExcludedWords(value);
    if (excludedWords.length > 0) {
      params.set("excluded", excludedWords.join(","));
    } else {
      params.delete("excluded");
    }
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="file-uploader">
      <h2>Upload File</h2>
      <form className="file-uploader-form">
        <div>
          <Input
            type="file"
            accept=""
            {...register("file")}
            onChange={handleFileChange}
          />
          {errors?.file && (
            <p className="error">{String(errors.file?.message)}</p>
          )}
        </div>

        <div className="excluded-words-input">
          <label htmlFor="excluded-words">
            Excluded Words (comma or space separated):
          </label>
          <textarea
            id="excluded-words"
            value={inputValue}
            onChange={handleTextareaChange}
            placeholder="e.g. the, and, or"
            rows={3}
            className="textarea-input"
          />
        </div>
      </form>
      {error && <p className="error-general">{error}</p>}
    </div>
  );
};

export default FileUploader;
