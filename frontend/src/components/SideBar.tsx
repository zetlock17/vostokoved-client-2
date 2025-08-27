const SideBar = () => {
  const chats = ['Чат 1', 'Чат 2', 'Длинное название чата 3']; // Placeholder data

  return (
    <div className="w-64 bg-gray-800 text-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">Чаты</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-2">
          <ul>
            {chats.map((chat, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-gray-700 text-sm truncate"
                >
                  {chat}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300">
          + Новый чат
        </button>
      </div>
    </div>
  );
}

export default SideBar