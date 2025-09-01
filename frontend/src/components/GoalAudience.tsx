const GoalAudience = () => {
  const audienceData = [
    {
      title: "Малый и средний бизнес",
      description: "готовый к экспансии на рынок КНР",
    },
    {
      title: "Производители",
      description: "планирующие экспорт продукции",
    },
    {
      title: "Логистические компании",
      description: "оптимизирующие торговые маршруты",
    },
    {
      title: "ВЭД-консультанты",
      description: "расширяющие экспертизу",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-sans">
            Для кого это
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:mt-6 font-sans">
            Для амбициозных компаний, стремящихся к успеху на китайском рынке
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {audienceData.map((item, index) => (
            <div key={index} className="p-8 text-center transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg h-full">
              <h3 className="text-lg font-semibold text-blue-600 font-sans">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalAudience;