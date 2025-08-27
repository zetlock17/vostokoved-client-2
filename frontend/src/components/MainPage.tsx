const MainPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <main className="container mx-auto px-6 text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Ваш ИИ-помощник для бизнеса с Китаем
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Автоматизируйте оформление товаров из Китая и в Китай. Быстро, точно, без лишних хлопот.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          Попробовать бесплатно
        </button>
      </main>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Ключевые возможности</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Автоматизация документов</h4>
              <p className="text-gray-400">Мгновенное заполнение и проверка таможенных деклараций и накладных.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Проверка соответствия</h4>
              <p className="text-gray-400">Анализ товаров на соответствие требованиям и нормам импорта/экспорта.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Оптимизация логистики</h4>
              <p className="text-gray-400">Подбор оптимальных маршрутов и способов доставки с учетом стоимости и сроков.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage