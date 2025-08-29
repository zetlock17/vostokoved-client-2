import { useState, useEffect } from "react";
import ChatComponent from "./ChatComponent"
import SideBar from "./SideBar"

const ChatPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(isMobile);

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
    <div className="flex flex-row w-full h-screen bg-gray-900">
        <SideBar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={toggleSidebar}
          isMobile={isMobile}
        />
        <ChatComponent isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} isMobile={isMobile} />
    </div>
  )
}

export default ChatPage