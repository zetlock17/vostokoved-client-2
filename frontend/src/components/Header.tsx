import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4 flex items-baseline justify-start space-x-4">
        <Link to="/" className="text-2xl font-bold text-white">Востоковед AI</Link>
        <Link to="/chat" className="text-gray-300 text-lg">Чат</Link>
      </div>
    </header>
  )
}

export default Header;