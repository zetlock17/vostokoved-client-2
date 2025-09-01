import { type ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';

type AnalysisBlockProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const AnalysisBlock: React.FC<AnalysisBlockProps> = ({ icon, title, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 border border-gray-200">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-blue-500">{icon}</div>
          <h3 className="text-md sm:text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="text-gray-400">
          {isCollapsed ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {!isCollapsed && (
        <div className="mt-4">
          <div className="pl-9">
            <p className="text-gray-700 whitespace-pre-wrap text-sm sm:text-base">{text}</p>
          </div>
          <div className="flex justify-start mt-4 px-1">
            <button onClick={handleCopy} className="text-gray-400 hover:text-gray-800">
              <Copy size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisBlock;
