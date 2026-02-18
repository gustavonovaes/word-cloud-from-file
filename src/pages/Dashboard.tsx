import Card from "@components/ui/Card";

import FileUploader from "@features/wordCloud/components/FileUploader";
import WordCloudDisplay from "@features/wordCloud/components/WordCloudDisplay";

const Dashboard = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="grid">
          <Card>
            <FileUploader />
          </Card>
        </div>
      </div>
      <WordCloudDisplay />
    </div>
  );
};

export default Dashboard;
