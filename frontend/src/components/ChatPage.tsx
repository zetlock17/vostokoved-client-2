import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import ChatComponent from "./ChatComponent"
import SideBar from "./SideBar"
import { getDialogs, deleteDialog } from "../services/DialogServices";
import type { DialogPreview } from "../types/dialogTypes";

const ChatPage = () => {
  // const { id } = useParams<{ id: string }>();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  const [chats, setChats] = useState<DialogPreview[]>([]);

  const fetchDialogs = async () => {
    const response = await getDialogs();
    if (response.status === 200) {
      setChats(response.data);
    }
  };

  const handleDeleteChat = async (chatId: number) => {
    const response = await deleteDialog(chatId);
    if (response.status === 200) {
      fetchDialogs();
    }
  };

  useEffect(() => {
    fetchDialogs();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex flex-row w-full h-screen bg-white">
        <SideBar 
          chats={chats}
          isCollapsed={isSidebarCollapsed} 
          onToggle={toggleSidebar}
          isMobile={isMobile}
          onDeleteChat={handleDeleteChat}
        />
        <ChatComponent isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} isMobile={isMobile} onNewChat={fetchDialogs} />
    </div>
  )
}

export default ChatPage;