import { useState, useEffect, useRef } from 'react';
import AnalysisResult from './AnalysisResult';
import { ArrowUp, Copy, Edit, Check, X, Star, PanelLeft } from 'lucide-react';

type Message = {
  id: number;
  sender: 'user' | 'ai';
  component?: React.ReactNode;
  text?: string;
};

type ChatComponentProps = {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  isMobile: boolean;
};

const ChatComponent: React.FC<ChatComponentProps> = ({ onToggleSidebar, isMobile }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        component: <AnalysisResult query={userMessage.text || ''} />,
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    }, 1000);
  };

  const handleEdit = (message: Message) => {
    if (message.text) {
      setEditingMessageId(message.id);
      setEditingText(message.text);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingText('');
  };

  const handleSaveEdit = (messageId: number) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, text: editingText } : msg
    ));
    setEditingMessageId(null);
    setEditingText('');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const ChatHeader = () => (
    <div className="p-4 flex items-center bg-gray-900 border-b border-gray-800 md:hidden">
      <button onClick={onToggleSidebar} className="p-1 text-gray-400 hover:text-white mr-4">
        <PanelLeft size={24} />
      </button>
      <h2 className="text-xl font-bold text-white">Востоковед</h2>
    </div>
  );

  if (messages.length === 0) {
    return (
      <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
        {isMobile && <ChatHeader />}
        <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6">
                <Star size={32} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-100">Готов к анализу</h2>
            <p className="mt-2 text-gray-400">
                <span className="block">Опишите товар или задайте вопрос об экспорте в Китай.</span>
                <span className="block">Получите структурированный экспертный анализ за секунды</span>
            </p>
        </div>
        <div className="p-4 bg-gray-900 border-t border-gray-700">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2 sm:space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Опишите товар..."
              className="flex-grow w-full px-4 py-2 text-gray-200 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <ArrowUp size={20} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
      {isMobile && <ChatHeader />}
      <div className="flex-grow p-2 sm:p-6 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
                {message.sender === 'user' && message.text && (
                  <div className="flex flex-col items-end">
                    <div className="bg-gray-700 text-white rounded-lg px-4 py-2 max-w-lg break-words">
                        {editingMessageId === message.id ? (
                          <div>
                            <textarea
                              value={editingText}
                              onChange={(e) => setEditingText(e.target.value)}
                              className="w-full bg-gray-800 text-white rounded-md p-2"
                            />
                            <div className="flex justify-end space-x-2 mt-2">
                              <button onClick={() => handleSaveEdit(message.id)} className="text-green-400 hover:text-green-300"><Check size={20} /></button>
                              <button onClick={handleCancelEdit} className="text-red-400 hover:text-red-300"><X size={20} /></button>
                            </div>
                          </div>
                        ) : (
                          message.text
                        )}
                    </div>
                    {editingMessageId !== message.id && (
                      <div className="flex items-center space-x-1 mt-1">
                          <button onClick={() => handleEdit(message)} className="p-1 text-gray-400 hover:text-white">
                              <Edit size={14} />
                          </button>
                          <button onClick={() => handleCopy(message.text!)} className="p-1 text-gray-400 hover:text-white">
                              <Copy size={14} />
                          </button>
                      </div>
                    )}
                  </div>
                )}
                {message.sender === 'ai' && (
                    <div className="w-full">
                        {message.component}
                    </div>
                )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-gray-900 border-t border-gray-700">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2 sm:space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Опишите товар..."
            className="flex-grow w-full px-4 py-2 text-gray-200 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            <ArrowUp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatComponent;