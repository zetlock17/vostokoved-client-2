import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowUp, PanelLeft, Star, Copy, Check, X } from "lucide-react";
import { newChat, sendMessage, getDialog } from "../services/DialogServices";


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
  onNewChat: () => void;
};

const ChatComponent: React.FC<ChatComponentProps> = ({ onToggleSidebar, isMobile, onNewChat }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const navigate = useNavigate();
  const { id: chatId } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMessages = async () => {
      if (chatId && chatId !== 'new') {
        const response = await getDialog(parseInt(chatId, 10));
        if (response.status === 200 && response.data) {
          const fetchedMessages: Message[] = response.data.map(msg => ({
            id: msg.id,
            text: msg.text,
            sender: msg.sender === 'model' ? 'ai' : 'user',
          }));
          setMessages(fetchedMessages);
        }
      } else {
        setMessages([]);
      }
    };

    fetchMessages();
  }, [chatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateUniqueId = () => {
    return Date.now() + Math.random();
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: generateUniqueId(),
      text: inputValue,
      sender: 'user',
    };

    console.log(chatId)

    setMessages(prevMessages => [...prevMessages, userMessage]);
    const currentInputValue = inputValue;
    setInputValue('');

    try {
      let currentChatId = chatId;
      if (!currentChatId || currentChatId === 'new') {
        const newChatResponse = await newChat();
        if (newChatResponse.status === 200 && newChatResponse.data) {
          const newChatId = (newChatResponse.data as { chat_id: number });
          navigate(`/chat/${newChatId}`);
          currentChatId = newChatId.toString();
          onNewChat();
        } else {
          throw new Error("Failed to create new chat");
        }
      }

      if (currentChatId) {
        const sendMessageResponse = await sendMessage(currentInputValue, parseInt(currentChatId, 10));
        if (sendMessageResponse.data) {
          const aiMessage: Message = {
            id: generateUniqueId(),
            sender: 'ai',
            text: sendMessageResponse.data.model_message,
          };
          setMessages(prevMessages => [...prevMessages, aiMessage]);
        } else {
          throw new Error("Failed to get AI response");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prevMessages => prevMessages.filter(msg => msg.id !== userMessage.id));
    }
  };

  // const handleEdit = (message: Message) => {
  //   if (message.text) {
  //     setEditingMessageId(message.id);
  //     setEditingText(message.text);
  //   }
  // };

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
    <div className="p-4 flex items-center bg-white border-b border-gray-200 md:hidden">
      <button onClick={onToggleSidebar} className="p-1 text-gray-500 hover:text-gray-900 mr-4">
        <PanelLeft size={24} />
      </button>
      <h2 className="text-xl font-bold text-gray-900">Востоковед</h2>
    </div>
  );

  if (messages.length === 0) {
    return (
      <div className="flex flex-col h-screen w-full bg-white text-gray-800">
        {isMobile && <ChatHeader />}
        <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <Star size={32} className="text-gray-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Готов к анализу</h2>
            <p className="mt-2 text-gray-500">
                <span className="block">Опишите товар или задайте вопрос об экспорте в Китай.</span>
                <span className="block">Получите структурированный экспертный анализ за секунды</span>
            </p>
        </div>
        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2 sm:space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Опишите товар..."
              className="flex-grow w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50"
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
    <div className="flex flex-col h-screen w-full bg-white text-gray-800">
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
                    <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-lg break-words">
                        {editingMessageId === message.id ? (
                          <div>
                            <textarea
                              value={editingText}
                              onChange={(e) => setEditingText(e.target.value)}
                              className="w-full bg-blue-600 text-white rounded-md p-2"
                            />
                            <div className="flex justify-end space-x-2 mt-2">
                              <button onClick={() => handleSaveEdit(message.id)} className="text-green-300 hover:text-white"><Check size={20} /></button>
                              <button onClick={handleCancelEdit} className="text-red-300 hover:text-white"><X size={20} /></button>
                            </div>
                          </div>
                        ) : (
                          message.text
                        )}
                    </div>
                    {editingMessageId !== message.id && (
                      <div className="flex items-center space-x-1 mt-1">
                          {/* <button onClick={() => handleEdit(message)} className="p-1 text-gray-400 hover:text-white">
                              <Edit size={14} />
                          </button> */}
                          <button onClick={() => handleCopy(message.text!)} className="p-1 text-gray-500 hover:text-gray-800">
                              <Copy size={14} />
                          </button>
                      </div>
                    )}
                  </div>
                )}
                {message.sender === 'ai' && message.text && (
                    <div className="w-full">
                        <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-lg break-words">
                            {message.text}
                        </div>
                    </div>
                )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2 sm:space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Опишите товар..."
            className="flex-grow w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50"
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