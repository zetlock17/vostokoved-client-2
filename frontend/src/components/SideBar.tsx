import { Link } from "react-router-dom";
import { PanelLeft, Search, Plus, Clock, MoreHorizontal, PanelRight } from 'lucide-react';

type SideBarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, onToggle }) => {
  // Placeholder data based on the image
  const chats = [
    { id: 1, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
    { id: 2, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
    { id: 3, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
    { id: 4, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
    { id: 5, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
    { id: 6, title: 'Название проекта', description: 'Описание описание описание описание описание описание...', time: '2 часа назад' },
  ];

  if (isCollapsed) {
    return (
      <div className="p-2 bg-gray-900 h-screen">
        <button onClick={onToggle} className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
          <PanelRight size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className="w-80 bg-gray-900 text-gray-300 flex flex-col h-screen">
      <div className="p-4 flex justify-between items-center">
        <button onClick={onToggle} className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
            <PanelLeft size={24} />
        </button>
        <Link to="/" className="text-2xl font-bold text-white">Востоковед</Link>
        <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
            <Search size={24} />
        </button>
      </div>

      <div className="p-4">
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-lg flex items-center justify-between text-sm transition duration-300">
          <div className="flex items-center">
            <Plus size={16} className="mr-2"/>
            Новый чат
          </div>
          <kbd className="px-2 py-1 text-xs font-sans text-gray-400 bg-gray-900 rounded border border-gray-700">Ctrl + K</kbd>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-hide">
        {chats.map((chat) => (
          <div key={chat.id} className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer group relative">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-white text-sm mb-1 pr-6">{chat.title}</h3>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-2 truncate">{chat.description}</p>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={12} className="mr-1.5" />
              <span>{chat.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;