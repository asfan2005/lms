import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "🎓 Masofaviy Ta'lim Platformasi Yangilandi",
    date: "2024-03-20",
    image: "https://picsum.photos/id/231/800/400",
    description: "O'quv jarayonini qo'llab-quvvatlash tizimida yangi funksiyalar qo'shildi. Endi talabalar video darslarni yuklash va guruh muhokamalarini tashkil etish imkoniyatiga ega.",
    category: "Platforma",
    author: "Texnik Qo'llab-quvvatlash Markazi"
  },
  { 
    id: 2,
    title: "💻 Elektron Jurnal Tizimi Ishga Tushdi",
    date: "2024-03-18",
    image: "https://picsum.photos/id/232/800/400",
    description: "Yangi elektron jurnal tizimi ishga tushirildi. O'qituvchilar endi baholash va davomat yuritishni onlayn amalga oshirishlari mumkin.",
    category: "Yangilik",
    author: "LMS Administratori"
  },
  {
    id: 3,
    title: "🌍 Xalqaro Hamkorlik Kengaymoqda",
    date: "2024-03-15",
    image: "https://picsum.photos/id/233/800/400",
    description: "Harvard va Oxford universitetlari bilan yangi hamkorlik shartnomasi imzolandi. Bu shartnoma doirasida 100 dan ortiq talabalarimiz xorijda ta'lim olish imkoniyatiga ega bo'lishadi.",
    category: "Hamkorlik",
    author: "Xalqaro aloqalar bo'limi"
  },
  {
    id: 4,
    title: "🔬 Innovatsion Laboratoriya Ochildi",
    date: "2024-03-14",
    image: "https://picsum.photos/id/234/800/400",
    description: "5 million dollarlik zamonaviy laboratoriya jihozlari o'rnatildi. Bu laboratoriyada nano-texnologiyalar va bio-tibbiyot sohasida tadqiqotlar olib boriladi.",
    category: "Innovatsiya",
    author: "Dr. Karimov B."
  },
  {
    id: 5,
    title: "🏆 Xalqaro Olimpiada G'oliblari",
    date: "2024-03-12",
    image: "https://picsum.photos/id/235/800/400",
    description: "Bizning talabalarimiz matematika bo'yicha xalqaro olimpiadada 3 ta oltin, 5 ta kumush medalni qo'lga kiritishdi. Bu natija universitet tarixidagi eng yaxshi ko'rsatkich hisoblanadi.",
    category: "Sport",
    author: "Sport bo'limi"
  },
  {
    id: 6,
    title: "🎯 Startup Loyihalar Tanlovi",
    date: "2024-03-10",
    image: "https://picsum.photos/id/236/800/400",
    description: "Eng yaxshi startup g'oyalar uchun 100,000 dollarlik grant e'lon qilindi. Tanlovda barcha fakultet talabalari ishtirok etishi mumkin. G'olib loyihalar inkubatsiya dasturiga qabul qilinadi.",
    category: "Startaplar",
    author: "Innovatsiya markazi"
  },
  {
    id: 7,
    title: "📚 Raqamli Kutubxona Loyihasi",
    date: "2024-03-08",
    image: "https://picsum.photos/id/237/800/400",
    description: "1 million kitobdan ortiq elektron resurslarni o'z ichiga olgan raqamli kutubxona ishga tushirildi. Talabalar 24/7 rejimida kutubxonadan foydalanish imkoniyatiga ega bo'lishdi.",
    category: "Kutubxona",
    author: "Axborot resurs markazi"
  },
  {
    id: 8,
    title: "🌟 Yangi Magistratura Dasturlari",
    date: "2024-03-06",
    image: "https://picsum.photos/id/238/800/400",
    description: "10 ta yangi magistratura dasturi ochildi. Dasturlar sun'iy intellekt, kiberxavfsizlik va raqamli marketing yo'nalishlarini qamrab oladi.",
    category: "Ta'lim",
    author: "O'quv bo'limi"
  }
];

function New() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleReadMore = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-blue-50 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3">
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 animate-pulse"
              fill="none" 
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
              />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 animate-fade-in">
              O'quv Jarayonini Qo'llab-quvvatlash Tizimi Yangiliklari
            </h1>
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 animate-pulse" 
              fill="none"
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round" 
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl">
              Tizimning eng so'nggi yangiliklari va imkoniyatlari bilan tanishing
            </p>
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none" 
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl bg-white">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsData.map((news) => (
              <div key={news.id} className="w-full flex-shrink-0">
                <div className="relative group">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 pb-16 sm:pb-20">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                        <span className="bg-blue-500 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                          {news.category}
                        </span>
                        <span className="text-gray-300 text-xs sm:text-sm">
                          {news.author}
                        </span>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 md:mb-6 leading-tight">
                        {news.title}
                      </h2>
                      
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 max-w-3xl">
                        {news.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <div className="flex items-center text-white">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-sm sm:text-base md:text-lg">{news.date}</span>
                        </div>
                        
                        <button 
                          onClick={() => handleReadMore(news.id)}
                          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start space-x-2"
                        >
                          <span className="text-sm sm:text-base">Batafsil</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-10">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 transition-all duration-300 rounded-full 
                  ${currentSlide === index 
                    ? 'w-8 sm:w-10 md:w-12 bg-blue-500' 
                    : 'w-2 sm:w-3 bg-white/50 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;