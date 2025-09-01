import { Globe, Shield, Clock } from 'lucide-react';

const AdvantagesBlock = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Преимущества</h2>
          <p className="text-lg text-gray-600 mt-4">
            Технологии будущего для решения сегодняшних бизнес-задач
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md mx-auto mb-6">
              <Globe className="text-gray-800" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Актуальные данные</h3>
            <p className="text-gray-600">
              Информация обновляется каждые 15 минут из 200+ официальных источников
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md mx-auto mb-6">
              <Shield className="text-gray-800" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Экономия времени</h3>
            <p className="text-gray-600">
              ИИ обрабатывает терабайты данных за секунды, экономя месяцы исследований
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md mx-auto mb-6">
              <Clock className="text-gray-800" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Проверенные источники</h3>
            <p className="text-gray-600">
              Данные от ведущих экспертов с 15+ летним опытом работы с Китаем
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesBlock;