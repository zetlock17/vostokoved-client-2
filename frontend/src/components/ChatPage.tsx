import { useState } from "react";
import ChatComponent from "./ChatComponent"
import SideBar from "./SideBar"

const ChatPage = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen">
        <SideBar isCollapsed={isSidebarCollapsed} onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)} />
        <ChatComponent />
    </div>
  )
}

export default ChatPage