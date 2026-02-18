import ReactWordcloud, { OptionsProp } from "@cp949/react-wordcloud";

import { useWordCloud } from "../hooks/useWordCloud";

const options: OptionsProp = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [12, 80],
  padding: 5,
  deterministic: true, 
  enableOptimizations: true,
  enableTooltip: false,
};

const WordCloudDisplay = () => {
  const { words, loading } = useWordCloud();

  const wordsDict = words.reduce(
    (acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const wordsData = Object.entries(wordsDict).map(([text, value]) => ({
    text,
    value,
  }));

  if (loading) {
    return (
      <div className="word-cloud-loading">
        <div className="word-cloud-spinner"></div>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="word-cloud-empty">
        <p>No word cloud generated yet. Upload a text file to get started.</p>
      </div>
    );
  }

  return (
    <div className="word-cloud-container">
      <ReactWordcloud words={wordsData} options={options} />
    </div>
  );
};

export default WordCloudDisplay;
