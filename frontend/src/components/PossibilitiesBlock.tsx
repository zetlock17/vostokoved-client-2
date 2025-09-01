import { TrendingUp, FileText, MessageSquare } from 'lucide-react';

const PossibilitiesBlock = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Возможности <span className="text-blue-700">ИИ</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Передовые алгоритмы машинного обучения для комплексного анализа китайского рынка
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gray-100 p-4 rounded-full">
                <TrendingUp className="h-8 w-8 text-blue-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Маркетинговые исследования</h3>
            <p className="text-gray-600">
              ИИ-анализ рынка в реальном времени: динамика импорта, ценообразование, конкурентная разведка
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gray-100 p-4 rounded-full">
                <FileText className="h-8 w-8 text-blue-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Документы и таможня</h3>
            <p className="text-gray-600">
              Автоматизированная подготовка документов, расчет пошлин, оптимизация логистики
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gray-100 p-4 rounded-full">
                <MessageSquare className="h-8 w-8 text-blue-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Переговоры и культура</h3>
            <p className="text-gray-600">
              ИИ-советник по китайскому бизнес-этикету, структурированию контрактов и арбитражу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesBlock;
