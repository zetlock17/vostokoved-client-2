import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
