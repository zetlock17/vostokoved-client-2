import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-center items-center sticky top-0 z-50 bg-white/30 backdrop-blur-lg">
        <Link to="/" className="text-2xl font-bold text-gray-900">Востоковед</Link>
    </header>
  )
}

export default Header