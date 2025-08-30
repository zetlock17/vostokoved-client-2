import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import MainPage from './components/MainPage';
import ChatPage from './components/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="flex h-screen flex-col">
        <main className="flex-1">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<ChatPage />} />
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App
