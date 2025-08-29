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
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-gray-400">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="text-gray-400">
          {isCollapsed ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {!isCollapsed && (
        <div className="mt-4">
          <div className="pl-9">
            <p className="text-gray-300 whitespace-pre-wrap">{text}</p>
          </div>
          <div className="flex justify-start mt-4 px-1">
            <button onClick={handleCopy} className="text-gray-400 hover:text-white">
              <Copy size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisBlock;
