import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndBlock = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            5 секунд — и вы знаете <br /> все об экспорте в <span className="text-blue-600">КНР</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Революционная ИИ-платформа анализирует ваш товар и предоставляет персональную стратегию выхода на китайский рынок
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={'/chat/new'}
              className="rounded-md bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center"
            >
              Начать консультацию <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndBlock;