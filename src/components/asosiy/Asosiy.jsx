import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaChartLine, FaUsers, FaClipboardCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function Asosiy() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaGraduationCap className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-blue-500" />
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-200 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "Kelajak Ta'lim Akademiyasi",
      subtitle: "Bilim - kelajakka sarmoya!",
      description: "Zamonaviy texnologiyalar va innovatsion yondashuvlar orqali ta'lim olish endi yanada qiziqarli. Bizning platformada o'qish - bu sarguzashtli sayohat!",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      buttonText: "Sayohatni boshlang",
      route: "/kelajakTalim",
      background: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.3)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaChartLine className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-green-500" />
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full animate-ping" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-300 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "Yutuqlar Monitoring Tizimi",
      subtitle: "Har kun yangi marralar sari!",
      description: "Shaxsiy progress va yutuqlaringizni kuzating. Interaktiv grafiklar va vizual tahlillar orqali o'sish yo'lingizni ko'ring.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      buttonText: "Yutuqlarni ko'rish",
      route: "/yutuqlarMonitoring",
      background: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.3)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaUsers className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-purple-500" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-200 rounded-full animate-ping" />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-purple-300 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "Ijodiy Hamkorlik Maydoni",
      subtitle: "Kuchimiz birlikda!",
      description: "Dunyo bo'ylab minglab o'quvchilar va ustozlar bilan hamkorlikda o'rganing. Bilimlar almashinuvi va do'stlik - muvaffaqiyat kaliti!",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      buttonText: "Jamoaga qo'shiling",
      route: "/ijodiyHamkorlik",
      background: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.3)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaClipboardCheck className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-red-500" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-200 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-300 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "AI Baholash Tizimi",
      subtitle: "Aqlli ta'lim - yorqin kelajak!",
      description: "Sun'iy intellekt asosidagi baholash tizimi sizning bilimlaringizni adolatli va tezkor baholaydi. Real vaqtda natijalar va tavsiyalar!",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
      buttonText: "Sinovdan o'ting",
      route: "/aiBaholash",
      background: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1600&auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.3)"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen pt-[120px] md:pt-[100px] pb-[40px] overflow-x-hidden bg-fixed bg-cover bg-center transition-all duration-700" 
      style={{ 
        backgroundImage: `url('${slides[currentSlide].background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40 backdrop-blur-sm transition-all duration-700" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 8 + 'px',
              height: Math.random() * 8 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-[20px] sm:mb-[24px]">
              {slides[currentSlide].icon}
            </div>
            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-semibold mb-[8px] sm:mb-[12px] animate-fadeIn">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold mb-[24px] text-white leading-[1.2] animate-slideIn">
              {slides[currentSlide].title}
            </h1>
            <p className="text-[16px] sm:text-[18px] mb-[32px] text-gray-100 leading-[1.8] px-[16px] md:px-0 animate-fadeIn">
              {slides[currentSlide].description}
            </p>
            <button 
              onClick={() => navigate(slides[currentSlide].route)}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold 
                hover:scale-105 transform transition duration-300 shadow-lg group overflow-hidden"
            >
              <span className="relative z-10">{slides[currentSlide].buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-10" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 group">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover 
                  transform transition-all duration-500 group-hover:scale-110 
                  brightness-105 contrast-105 saturate-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                group-hover:opacity-0 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay 
                group-hover:opacity-0 transition-all duration-300" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 relative overflow-hidden
                ${currentSlide === index 
                  ? "w-12 h-3 bg-white rounded-full" 
                  : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"}
              `}
            >
              {currentSlide === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient" />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const styles = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
    100% { transform: translateY(0) rotate(360deg); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default Asosiy;