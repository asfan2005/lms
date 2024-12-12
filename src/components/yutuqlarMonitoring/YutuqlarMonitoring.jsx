import React, { useState, useEffect } from "react";
import { Header,Footer } from "../index";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, BarChart, Bar, Cell } from 'recharts';
import { FaTrophy, FaChartLine, FaMedal, FaStar, FaBook, FaClock, FaUserGraduate, FaChalkboardTeacher, FaGraduationCap, FaLightbulb, FaRocket, FaChartBar, FaBookReader, FaCertificate, FaLaptopCode, FaUserTie, FaGlobe, FaProjectDiagram } from 'react-icons/fa';

function YutuqlarMonitoring() {
  const progressData = [
    { oy: 'Yanvar', ball: 75, davomat: 90 },
    { oy: 'Fevral', ball: 82, davomat: 95 },
    { oy: 'Mart', ball: 88, davomat: 88 },
    { oy: 'April', ball: 85, davomat: 92 },
    { oy: 'May', ball: 90, davomat: 96 },
    { oy: 'Iyun', ball: 87, davomat: 94 },
  ];

  const fanlarData = [
    { name: 'Matematika', ball: 92, color: '#FF8042' },
    { name: 'Fizika', ball: 85, color: '#00C49F' },
    { name: 'Informatika', ball: 95, color: '#FFBB28' },
    { name: 'Ingliz tili', ball: 88, color: '#0088FE' },
  ];

  const achievements = [
    { id: 1, title: "Eng Yaxshi O'quvchi", date: "2024", icon: <FaTrophy className="text-yellow-500" />, description: "Choraklik baholar bo'yicha eng yuqori natija" },
    { id: 2, title: "100% Davomat", date: "2024", icon: <FaStar className="text-yellow-500" />, description: "To'liq o'quv yili davomida muntazam qatnashganlik" },
    { id: 3, title: "Faol Ishtirokchi", date: "2024", icon: <FaMedal className="text-yellow-500" />, description: "Maktab tadbirlarida faol ishtirok etish" },
    { id: 4, title: "Olimpiada G'olibi", date: "2024", icon: <FaUserGraduate className="text-blue-500" />, description: "Viloyat olimpiadasida 2-o'rin" },
  ];

  const [animatedStats, setAnimatedStats] = useState({
    hours: 0,
    tasks: 0,
    score: 0,
    attendance: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targetValues = {
      hours: 892,
      tasks: 156,
      score: 4.7,
      attendance: 98
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setAnimatedStats({
        hours: Math.round((targetValues.hours / steps) * currentStep),
        tasks: Math.round((targetValues.tasks / steps) * currentStep),
        score: Number(((targetValues.score / steps) * currentStep).toFixed(1)),
        attendance: Math.round((targetValues.attendance / steps) * currentStep)
      });

      if (currentStep === steps) {
        clearInterval(timer);
        setAnimatedStats(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statistikalar = [
    { title: "O'qish soatlari", value: `${animatedStats.hours} soat`, icon: <FaClock className="text-green-500" /> },
    { title: "Topshirilgan vazifalar", value: `${animatedStats.tasks} ta`, icon: <FaBook className="text-blue-500" /> },
    { title: "O'rtacha ball", value: `${animatedStats.score}`, icon: <FaChartLine className="text-purple-500" /> },
    { title: "Qatnashgan darslar", value: `${animatedStats.attendance}%`, icon: <FaChalkboardTeacher className="text-red-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Welcome Section */}
        <div className="bg-white w-full rounded-2xl shadow-xl p-4 md:p-8 mb-6 md:mb-8">
          <div className="max-w-6xl mx-auto">
            {/* Greeting */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center mb-6 md:mb-8">
              <div className="text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-3 md:mb-4">
                  Kelajak Sari Birgalikda!
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-3 md:mb-4">
                  O'quv jarayonini qo'llab quvvatlash tizimiga Xush Kelibsiz
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Zamonaviy ta'lim - bu shunchaki dars emas, bu muvaffaqiyat sari qo'yilgan har bir qadamni 
                  kuzatish va tahlil qilish imkoniyatidir.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full absolute -top-4 -right-4 animate-pulse"></div>
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center relative">
                    <FaGraduationCap className="text-4xl md:text-6xl text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-blue-50 rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaChartLine className="text-3xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Real Vaqtdagi Natijalar</h4>
                <p className="text-gray-600">Har bir yutuğingiz va o'sishingizni onlayn kuzating</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FaLightbulb className="text-3xl text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Aqlli Tavsiyalar</h4>
                <p className="text-gray-600">Sizga moslashtirilgan o'quv strategiyalari</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FaTrophy className="text-3xl text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Yutuqlar Tarixi</h4>
                <p className="text-gray-600">Har bir muvaffaqiyatingiz qayd etiladi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {statistikalar.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="text-xl md:text-2xl mr-3">{stat.icon}</div>
                <h3 className="text-base md:text-lg font-semibold">{stat.title}</h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">O'qish Progressi</h2>
            <div className="w-full">
              <LineChart 
                width={window.innerWidth < 768 ? 300 : 500} 
                height={300} 
                data={progressData}
                className="mx-auto"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="oy" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ball" stroke="#3B82F6" strokeWidth={2} name="Ball" />
                <Line type="monotone" dataKey="davomat" stroke="#10B981" strokeWidth={2} name="Davomat" />
              </LineChart>
            </div>
          </div>

          {/* Subjects Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Fanlar bo'yicha ko'rsatkichlar</h2>
            <div className="w-full">
              <BarChart 
                width={window.innerWidth < 768 ? 300 : 500} 
                height={300} 
                data={fanlarData}
                className="mx-auto"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ball" fill="#8884d8">
                  {fanlarData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Yutuqlar va Mukofotlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="border rounded-lg p-3 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="text-2xl md:text-3xl mr-3 md:mr-4">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{achievement.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm">{achievement.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
            <FaRocket className="text-blue-500 mr-3 text-2xl md:text-3xl" />
            Qo'shimcha Ma'lumotlar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Keyingi Maqsadlar */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 md:p-6 shadow-md">
              <h3 className="font-semibold text-lg md:text-xl mb-4 flex items-center text-blue-700">
                <FaLightbulb className="text-yellow-500 mr-3 text-xl md:text-2xl" />
                Keyingi Maqsadlar
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaBookReader className="text-blue-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Matematika Olimpiadasi</h4>
                    <p className="text-sm text-gray-600">Viloyat miqyosidagi olimpiadaga tayyorgarlik</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-green-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">IELTS Sertifikati</h4>
                    <p className="text-sm text-gray-600">7.0 ball olish uchun tayyorgarlik</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaLaptopCode className="text-purple-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Dasturlash Portfolio</h4>
                    <p className="text-sm text-gray-600">5 ta amaliy loyiha yaratish</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tavsiyalar */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 md:p-6 shadow-md">
              <h3 className="font-semibold text-lg md:text-xl mb-4 flex items-center text-green-700">
                <FaUserTie className="text-green-500 mr-3 text-xl md:text-2xl" />
                Tavsiyalar
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGlobe className="text-teal-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Online Ta'lim</h4>
                    <p className="text-sm text-gray-600">Coursera va Udemy platformalaridan foydalaning</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaProjectDiagram className="text-orange-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Amaliy Loyihalar</h4>
                    <p className="text-sm text-gray-600">Har oyda kamida bitta loyihada qatnashing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FaBookReader className="text-indigo-500 text-lg mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Qo'shimcha Adabiyotlar</h4>
                    <p className="text-sm text-gray-600">Mutaxassislik bo'yicha yangi kitoblar o'qing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {/* Maqsadlar bajarilishi */}
            <div className="bg-blue-50 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-blue-500 text-xl mb-1">80%</div>
              <div className="text-sm text-gray-600">Maqsadlar bajarilishi</div>
            </div>

            {/* Tavsiyalar bajarilishi */}
            <div className="bg-green-50 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-green-500 text-xl mb-1">65%</div>
              <div className="text-sm text-gray-600">Tavsiyalar bajarilishi</div>
            </div>

            {/* Faollik darajasi */}
            <div className="bg-purple-50 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-purple-500 text-xl mb-1">90%</div>
              <div className="text-sm text-gray-600">Faollik darajasi</div>
            </div>

            {/* Umumiy progress */}
            <div className="bg-orange-50 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-orange-500 text-xl mb-1">75%</div>
              <div className="text-sm text-gray-600">Umumiy progress</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default YutuqlarMonitoring;