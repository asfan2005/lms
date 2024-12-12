import React, { useState, useEffect } from "react";
import { Header, Footer } from "../index";
import { FaRocket, FaClock, FaChartLine, FaUsers, FaBook, FaHeadset } from 'react-icons/fa';
import { BiAnalyse, BiSupport, BiTime } from 'react-icons/bi';

// Counter komponenti
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
};

function AiBaholash() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  // Statistics array
  const statistics = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      number: 50000,
      suffix: '+',
      label: "Faol foydalanuvchilar"
    },
    {
      icon: <BiSupport className="w-8 h-8" />,
      number: 24,
      suffix: '/7',
      label: "Qo'llab-quvvatlash"
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      number: 100,
      suffix: '+',
      label: "O'quv kurslari"
    },
    {
      icon: <BiTime className="w-8 h-8" />,
      number: 98,
      suffix: '%',
      label: "Aniqlik darajasi"
    }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const features = [
    {
      title: "Real vaqtdagi baholash",
      description: "Topshiriqlaringizni bir necha soniyada tekshirish va natijalarni tahlil qilish",
      icon: <FaRocket className="w-8 h-8" />,
    },
    {
      title: "24/7 Qo'llab-quvvatlash",
      description: "Kunning istalgan vaqtida professional yordam va maslahat",
      icon: <FaClock className="w-8 h-8" />,
    },
    {
      title: "Tahliliy hisobotlar",
      description: "Batafsil statistika va progress tahlili",
      icon: <FaChartLine className="w-8 h-8" />,
    },
    {
      title: "Guruh loyihalari",
      description: "Jamoa bo'lib ishlash va bilimlarni baham ko'rish",
      icon: <FaUsers className="w-8 h-8" />,
    },
    {
      title: "Kurs katalogi",
      description: "100+ professional kurslar va materiallar",
      icon: <FaBook className="w-8 h-8" />,
    },
    {
      title: "AI Yordamchi",
      description: "Sun'iy intellekt asosidagi shaxsiy o'quv yordamchisi",
      icon: <BiAnalyse className="w-8 h-8" />,
    }
  ];

  const faqItems = [
    {
      question: "O'quv jarayonini qo'llab-quvvatlash tizimi qanday ishlaydi?",
      answer: "Bizning tizim o'qituvchi va o'quvchilar o'rtasidagi muloqotni avtomatlashtiradi. O'qituvchilar topshiriqlarni yuklaydi, o'quvchilar bajaradi, AI tizimimiz esa real vaqtda tekshirib, batafsil tahlil va tavsiyalar beradi. Shuningdek, o'quvchilarning individual rivojlanish yo'nalishlarini kuzatib boradi va moslashtirilgan o'quv dasturlarini taklif etadi."
    },
    {
      question: "Tizim qanday turdagi topshiriqlarni qo'llab-quvvatlaydi?",
      answer: "Bizning tizim quyidagi turdagi topshiriqlarni qo'llab-quvvatlaydi: test topshiriqlari, yozma ishlar, prezentatsiyalar, amaliy loyihalar, guruh ishlari, video topshiriqlar va boshqalar. Har bir topshiriq turi uchun maxsus baholash mezonlari va AI algoritmlari ishlab chiqilgan."
    },
    {
      question: "O'qituvchilar uchun qanday qulayliklar mavjud?",
      answer: "O'qituvchilar uchun quyidagi imkoniyatlar mavjud: avtomatik tekshiruv tizimi, individual va guruhli statistikalar, o'quvchilar faolligini monitoring qilish, topshiriqlar bazasi, baholash mezonlarini sozlash, virtual sinf xonasi, video darslar o'tkazish va boshqalar. Bu imkoniyatlar o'qituvchilarga vaqtlarini tejash va samarali ta'lim berishga yordam beradi."
    },
    {
      question: "O'quvchilar uchun qanday qo'shimcha imkoniyatlar mavjud?",
      answer: "O'quvchilar uchun quyidagi imkoniyatlar mavjud: shaxsiy kabinet, individual o'quv rejasi, progress monitoring, AI yordamchisi, virtual kutubxona, video darslar arxivi, hamkorlikdagi o'quv loyihalari, onlayn maslahatlar va 24/7 texnik yordam. Shuningdek, har bir o'quvchi o'z bilim darajasiga mos materiallar va topshiriqlar oladi."
    },
    {
      question: "Masofaviy ta'lim jarayoni qanday tashkil etilgan?",
      answer: "Masofaviy ta'lim jarayoni zamonaviy texnologiyalar yordamida tashkil etilgan bo'lib, u quyidagilarni o'z ichiga oladi: video konferensiyalar, onlayn darslar, interaktiv topshiriqlar, guruh muhokamalar, real vaqtdagi chat, fayl almashish tizimi va boshqalar. Barcha darslar va materiallar mobil qurilmalarda ham foydalanish uchun moslashtirilgan."
    },
    {
      question: "Bilimlarni baholash tizimi qanday ishlaydi?",
      answer: "Bilimlarni baholash tizimi sun'iy intellekt algoritmlariga asoslangan bo'lib, u bir necha bosqichda amalga oshiriladi: dastlabki bilim darajasini aniqlash, joriy nazoratlar, oraliq va yakuniy baholash. Tizim nafaqat to'g'ri/noto'g'ri javoblarni tekshiradi, balki o'quvchining fikrlash jarayoni, yondashuvlari va rivojlanish dinamikasini ham tahlil qiladi."
    },
    {
      question: "Qanday texnik talablar mavjud?",
      answer: "Tizimdan foydalanish uchun internet tarmog'iga ulangan kompyuter, planshet yoki smartfon bo'lishi kifoya. Tizim zamonaviy brauzerlar (Chrome, Firefox, Safari, Edge) bilan mos ishlaydi. Video darslar uchun kamera va mikrofon tavsiya etiladi. Mobil ilova orqali offline rejimda ham foydalanish imkoniyati mavjud."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setShowRegistration(false);
    setFormData({ fullName: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 md:py-32">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Aqlli ta'lim - yorqin kelajak!
            </h1>
            <p className="text-xl md:text-2xl mb-8 md:mb-12 animate-fade-in-delay">
              Sun'iy intellekt asosidagi zamonaviy baholash tizimi
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition duration-300">
                Bepul boshlash
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-transparent border-2 border-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition duration-300">
                Demo ko'rish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div id="stats-section" className="bg-white py-12 md:py-20 -mt-8 md:-mt-16 relative z-10 rounded-t-3xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {isVisible && (
                    <Counter 
                      end={stat.number} 
                      duration={2000} 
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-card {
          animation: countUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Bizning afzalliklarimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Ko'p beriladigan savollar</h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-16 max-w-3xl mx-auto">
            O'quv jarayonini qo'llab-quvvatlash tizimimiz haqida eng ko'p so'raladigan savollar va ularga javoblar
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4 hover:shadow-lg transition duration-300">
                <button
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left font-bold flex justify-between items-center"
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                >
                  <span className="flex-1 pr-4">{item.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeTab === index && (
                  <div className="px-4 md:px-6 py-3 md:py-4 text-gray-600 border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">Kelajagingiz sari dadil qadam tashlang!</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto">
            Zamonaviy ta'lim tizimimiz orqali bilimlaringizni yangi bosqichga olib chiqing. 
            Bizning platformada professional o'qituvchilar, interaktiv darslar va sun'iy intellekt 
            yordamida o'z sohanggizda yetakchi mutaxassisga aylaning. Kelajak bugun boshlanadi!
          </p>
          <button 
            onClick={() => setShowRegistration(true)}
            className="bg-white text-blue-600 px-8 md:px-12 py-3 md:py-4 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition duration-300"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
      
      <Footer />

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-8 max-w-lg w-full transform transition-all duration-300 animate-modal-pop">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <FaRocket className="text-white w-6 h-6 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tez kunda...
                </h3>
              </div>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaClock className="text-blue-600 w-5 h-5" />
                </div>
                <p className="text-gray-700">Loyihamiz ustida faol ishlar olib borilmoqda</p>
              </div>
              
              <div className="flex items-center space-x-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaChartLine className="text-indigo-600 w-5 h-5" />
                </div>
                <p className="text-gray-700">Yanada yaxshiroq xizmat ko'rsatish uchun tizimni takomillashtiryapmiz</p>
              </div>
              
              <div className="flex items-center space-x-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <BiAnalyse className="text-purple-600 w-5 h-5" />
                </div>
                <p className="text-gray-700">Tez orada xizmatingizda bo'lamiz!</p>
              </div>
              
              <button
                onClick={() => setShowDemo(false)}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transform hover:scale-105 transition duration-300 animate-fade-in-up"
                style={{animationDelay: '0.8s'}}
              >
                Tushunarli
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Ro'yxatdan o'tish</h3>
              <button 
                onClick={() => setShowRegistration(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  F.I.O
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="To'liq ismingizni kiriting"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+998 XX XXX XX XX"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Qo'shimcha ma'lumotlar..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-bold hover:opacity-90 transform transition duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Qo'shimcha animatsiyalar uchun styles */}
      <style jsx>{`
        @keyframes modal-pop {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-modal-pop {
          animation: modal-pop 0.3s ease-out forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default AiBaholash;
