import ChatComponent from "./ChatComponent"
import SideBar from "./SideBar"

const ChatPage = () => {
  return (
    <div className="flex flex-row w-full">
        <SideBar />
        <ChatComponent />
    </div>
  )
}

export default ChatPage