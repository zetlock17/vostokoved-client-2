import { useState } from "react";
import { Link } from "react-router-dom";
import { PanelLeft, Search, Plus, Clock, MoreHorizontal, PanelRight, X } from 'lucide-react';
import type { DialogPreview } from "../types/dialogTypes";

type SideBarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobile: boolean;
  chats: DialogPreview[];
  onDeleteChat: (chatId: number) => void;
};

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, onToggle, isMobile, chats, onDeleteChat }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  if (isMobile) {
    if (isCollapsed) {
      return null;
    }
    // Mobile view
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onToggle}>
        <div className="bg-gray-900 text-gray-300 flex flex-col h-screen" onClick={(e) => e.stopPropagation()}>
          <div className="p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">Востоковед</Link>
            <button onClick={onToggle} className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
                <X size={24} />
            </button>
          </div>

          <div className="p-4">
            <Link to="/chat/new" className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-lg flex items-center justify-between text-sm transition duration-300">
              <div className="flex items-center">
                <Plus size={16} className="mr-2"/>
                Новый чат
              </div>
              <kbd className="px-2 py-1 text-xs font-sans text-gray-400 bg-gray-900 rounded border border-gray-700">Начать!</kbd>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-hide">
            {chats.map((chat) => (
              <Link to={`/chat/${chat.id}`} key={chat.id} className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer group relative block">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-white text-sm mb-1 pr-6">{chat.name}</h3>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === chat.id ? null : chat.id);
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {openMenuId === chat.id && (
                    <div className="absolute top-8 right-3 bg-gray-800 rounded-md shadow-lg z-10">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onDeleteChat(chat.id);
                          setOpenMenuId(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700"
                      >
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock size={12} className="mr-1.5" />
                  <span>{new Date(chat.date).toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop view
  if (isCollapsed) {
    return (
      <div>
        <div className="p-4 md:flex justify-between items-center h-min hidden">
          <button onClick={onToggle} className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
              <PanelRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-gray-900 text-gray-300 flex-col h-screen hidden md:flex">
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
        <Link to="/chat/new" className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-lg flex items-center justify-between text-sm transition duration-300">
          <div className="flex items-center">
            <Plus size={16} className="mr-2"/>
            Новый чат
          </div>
          <kbd className="px-2 py-1 text-xs font-sans text-gray-400 bg-gray-900 rounded border border-gray-700">Начать!</kbd>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-hide">
        {chats.map((chat) => (
          <Link to={`/chat/${chat.id}`} key={chat.id} className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer group relative block">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-white text-sm mb-1 pr-6">{chat.name}</h3>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === chat.id ? null : chat.id);
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal size={16} />
              </button>
              {openMenuId === chat.id && (
                <div className="absolute top-8 right-3 bg-gray-800 rounded-md shadow-lg z-10">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onDeleteChat(chat.id);
                      setOpenMenuId(null);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700"
                  >
                    Удалить
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock size={12} className="mr-1.5" />
              <span>{new Date(chat.date).toLocaleString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;