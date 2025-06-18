import React, { useState } from 'react';

interface AnalysisItem {
  id: string;
  feature: string;
  icon: string;
  lastUpdated: string;
}

interface AnalysisHistoryProps {
  analysisData?: AnalysisItem[];
  onViewDetails?: (id: string) => void;
}

const defaultAnalysisData: AnalysisItem[] = [
  {
    id: 'color',
    feature: 'Color Analysis',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e6e7ef38f4bd3d3192905ff4dcc58d2da35757b?placeholderIfAbsent=true',
    lastUpdated: 'June 15, 2025'
  },
  {
    id: 'skin',
    feature: 'Skin Type Analysis',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e48f94d7c92a8614f85f2f6c82c0621b1b69e5a?placeholderIfAbsent=true',
    lastUpdated: 'June 15, 2025'
  },
  {
    id: 'body',
    feature: 'Body Shape Analysis',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/78451edc6226216d62deef96d03d320e37a4d4a0?placeholderIfAbsent=true',
    lastUpdated: 'June 15, 2025'
  }
];

export const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({
  analysisData = defaultAnalysisData,
  onViewDetails
}) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);

  const handleViewDetails = (id: string) => {
    if (onViewDetails) {
      onViewDetails(id);
    } else {
      setSelectedAnalysis(id);
    }
  };

  const closeModal = () => {
    setSelectedAnalysis(null);
  };

  const getAnalysisDetails = (id: string) => {
    const details = {
      color: {
        title: 'Color Analysis Results',
        content: 'Your color palette analysis shows you have a warm undertone. Colors that complement you best include earth tones, warm browns, and golden hues.'
      },
      skin: {
        title: 'Skin Type Analysis Results',
        content: 'Your skin type analysis indicates combination skin with an oily T-zone. Recommended products include gentle cleansers and oil-free moisturizers.'
      },
      body: {
        title: 'Body Shape Analysis Results',
        content: 'Your body shape analysis suggests an hourglass figure. Clothing styles that enhance your silhouette include fitted tops and A-line skirts.'
      }
    };
    return details[id as keyof typeof details] || { title: 'Analysis Results', content: 'Details not available.' };
  };

  return (
    <section className="bg-white shadow-[3px_3px_4px_rgba(0,0,0,0.25)] border flex min-h-[420px] w-full max-w-[1362px] flex-col items-stretch text-xl text-[rgba(74,59,48,1)] font-normal mt-[45px] pt-[15px] pb-6 px-[52px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5" aria-label="Analysis history">
      <header className="text-[40px] text-center max-md:max-w-full">
        <h2>Analysis History</h2>
      </header>
      
      <div className="flex w-full items-stretch gap-5 text-center justify-between mt-[25px] max-md:max-w-full" role="row">
        <div role="columnheader">Features</div>
        <div role="columnheader">Last Updated</div>
        <div role="columnheader">Action</div>
      </div>
      
      <hr className="border min-h-px w-full mt-[25px] border-black border-solid" />
      
      <div role="table" aria-label="Analysis history table">
        {analysisData.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center gap-5 flex-wrap justify-between mt-[25px] pr-20 max-md:max-w-full max-md:pr-5"
            role="row"
          >
            <div className="self-stretch flex items-center gap-2.5" role="cell">
              <img
                src={item.icon}
                alt={`${item.feature} icon`}
                className="aspect-[1] object-contain w-[55px] self-stretch shrink-0 my-auto rounded-[50%]"
              />
              <span className="self-stretch my-auto">{item.feature}</span>
            </div>
            <div className="self-stretch my-auto" role="cell">
              <time dateTime={item.lastUpdated}>{item.lastUpdated}</time>
            </div>
            <div role="cell">
              <button
                onClick={() => handleViewDetails(item.id)}
                className="bg-[rgba(241,225,199,1)] border self-stretch whitespace-nowrap my-auto px-[13px] py-[3px] rounded-[5px] border-[rgba(74,59,48,0.3)] border-solid hover:bg-[rgba(241,225,199,0.8)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(116,75,40,1)]"
                aria-label={`View details for ${item.feature}`}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="analysis-details-title">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
            <header className="flex justify-between items-center mb-4">
              <h3 id="analysis-details-title" className="text-xl font-bold text-[rgba(74,59,48,1)]">
                {getAnalysisDetails(selectedAnalysis).title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close details"
              >
                ×
              </button>
            </header>
            <div className="text-gray-600 mb-4">
              <p>{getAnalysisDetails(selectedAnalysis).content}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[rgba(116,75,40,1)] text-white rounded hover:bg-[rgba(116,75,40,0.9)] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
