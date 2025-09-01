import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import chatExample1 from "../assets/chat-example-1.png";
import chatExample2 from "../assets/chat-example-2.png";
import setka from "../assets/setka.png";

const HeroBlock = () => {
  return (
    <section className="relative bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${setka})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-40 text-center z-10">
        <img src={chatExample1} alt="Chat Example 1" className="hidden md:block absolute top-20 left-10 w-[22%] max-w-lg opacity-80 transform -rotate-12 shadow-2xl rounded-2xl pointer-events-none" />
        <img src={chatExample2} alt="Chat Example 2" className="hidden md:block absolute bottom-8 right-10 w-[26%] max-w-lg opacity-80 transform rotate-12 shadow-2xl rounded-2xl pointer-events-none" />

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          <span className="text-blue-700">ИИ-консультант</span><br />по экспорту в КНР
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-600">
          Узнайте все о выходе на рынок Китая за <span className="font-semibold text-gray-800">5 минут</span>
        </p>
        <Link
          to="/chat/new"
          className="mt-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Начать консультацию
          <ArrowRight className="ml-3 h-6 w-6" />
        </Link>
      </div>
    </section>
  );
};

export default HeroBlock;
