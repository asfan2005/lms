import React, { useState } from "react";
import { Header, Footer } from "../index";
import CountUp from 'react-countup';

function IjodiyHamkorlik() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda form ma'lumotlarini yuborish logikasi bo'ladi
    console.log('Form yuborildi:', formData);
    setFormData({ name: '', phone: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section - yangilangan responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-blue-800 mb-4 sm:mb-6">
          Kelajak ta'limi - bugun boshlanadi!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          Bizning platformada dunyo bo'ylab minglab iste'dodli o'qituvchilar va shijoatli o'quvchilar 
          bir maqsad yo'lida birlashgan - zamonaviy bilimlarni o'zlashtirish va ulashish. 
          Keling, ta'lim kelajagini birgalikda yarataylik!
        </p>

        {/* Features Grid - yangilangan responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online Ta'lim</h3>
            <p className="text-gray-600">Masofaviy ta'lim orqali bilim olish imkoniyati</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hamkorlik</h3>
            <p className="text-gray-600">O'qituvchi va o'quvchilar o'rtasida samarali muloqot</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovatsiya</h3>
            <p className="text-gray-600">Zamonaviy ta'lim texnologiyalari va yangiliklar</p>
          </div>
        </div>

        {/* Statistics Section - yangilangan responsive */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 mt-12 sm:mt-16 lg:mt-20 overflow-hidden">
          {/* Background Animation Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-32 h-32 bg-white/10 rounded-full -bottom-16 -right-16 animate-pulse delay-300"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-10">
            Raqamlarda biz 🚀
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {/* O'quvchilar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <CountUp
                  end={10000}
                  duration={2.5}
                  separator=","
                  className="text-5xl font-bold text-white"
                  enableScrollSpy={true}
                />
                <span className="text-5xl font-bold text-white">+</span>
                <div className="flex items-center justify-center mt-2">
                  <svg className="w-6 h-6 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                  <p className="text-white/90">Faol o'quvchilar</p>
                </div>
              </div>
            </div>

            {/* O'qituvchilar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <CountUp
                  end={500}
                  duration={2.5}
                  className="text-5xl font-bold text-white"
                  enableScrollSpy={true}
                />
                <span className="text-5xl font-bold text-white">+</span>
                <div className="flex items-center justify-center mt-2">
                  <svg className="w-6 h-6 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  <p className="text-white/90">Professional o'qituvchilar</p>
                </div>
              </div>
            </div>

            {/* Video darslar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <CountUp
                  end={1000}
                  duration={2.5}
                  className="text-5xl font-bold text-white"
                  enableScrollSpy={true}
                />
                <span className="text-5xl font-bold text-white">+</span>
                <div className="flex items-center justify-center mt-2">
                  <svg className="w-6 h-6 text-red-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  <p className="text-white/90">Video darslar</p>
                </div>
              </div>
            </div>

            {/* Mamnun o'quvchilar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <CountUp
                  end={98}
                  duration={2.5}
                  suffix="%"
                  className="text-5xl font-bold text-white"
                  enableScrollSpy={true}
                />
                <div className="flex items-center justify-center mt-2">
                  <svg className="w-6 h-6 text-pink-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-white/90">Mamnun o'quvchilar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges - yangilangan responsive */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-12 relative z-10">
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 flex items-center">
              <span className="text-yellow-300 mr-2">⭐</span>
              <span className="text-white">Top Rated Platform</span>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 flex items-center">
              <span className="text-blue-300 mr-2">🏆</span>
              <span className="text-white">Premium Quality</span>
            </div>
          </div>
        </div>

        {/* Benefits Section - yangilangan responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
            Nima uchun aynan biz bilan o'rganish kerak?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Biz shunchaki ta'lim platformasi emas, biz sizning kelajagingiz me'morlarimiz! 
            Har bir dars, har bir qadam sizni yangi cho'qqilarga olib chiqadi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Yuqori sifatli ta'lim */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-blue-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Yuqori sifatli ta'lim</h3>
              <p className="text-gray-600 mb-4">
                Jahon standartlariga mos zamonaviy dasturlar va o'quv materiallari. 
                Har bir kurs amaliyotchi ekspertlar tomonidan ishlab chiqilgan va doimiy yangilanib turadi.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real loyihalar ustida ishlash
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Zamonaviy o'qitish metodikalari
                </li>
              </ul>
            </div>

            {/* Moslashuvchan ta'lim */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-purple-500">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Moslashuvchan ta'lim</h3>
              <p className="text-gray-600 mb-4">
                Sizning vaqtingiz - sizning boyligingiz! O'zingizga qulay vaqtda, 
                istalgan joyda, istalgan qurilmadan o'qish imkoniyati.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 platformaga kirish imkoniyati
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Offline rejimda ham foydalanish mumkin
                </li>
              </ul>
            </div>

            {/* Hamjamiyat */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-green-500">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Kuchli hamjamiyat</h3>
              <p className="text-gray-600 mb-4">
                10,000+ dan ortiq o'quvchilar va mutaxassislar bilan bir platformada! 
                Networking va tajriba almashish imkoniyati.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional mentorlar yordami
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Jonli muloqot va muhokamalar
                </li>
              </ul>
            </div>

            {/* Kasbiy rivojlanish */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-red-500">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">Kasbiy rivojlanish</h3>
              <p className="text-gray-600 mb-4">
                Nafaqat bilim, balki real kariera imkoniyatlari! Biz bilan o'rganing va 
                dream jobingizni qo'lga kiriting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Portfolio yaratish imkoniyati
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Ish beruvchilar bilan aloqa
                </li>
              </ul>
            </div>

            {/* Innovatsion yondashuv */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-yellow-500">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Innovatsion yondashuv</h3>
              <p className="text-gray-600 mb-4">
                Eng so'nggi texnologiyalar va innovatsion o'qitish usullari! 
                Virtual reallik, AI va gamifikatsiya elementlari.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Interaktiv o'quv materiallari
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Zamonaviy o'qitish texnologiyalari
                </li>
              </ul>
            </div>

            {/* Kafolatlangan natija */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-pink-500">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Kafolatlangan natija</h3>
              <p className="text-gray-600 mb-4">
                Biz natijaga ishonamiz! Agar kurs sizni qoniqtirmasa, 
                pulingizni 30 kun ichida qaytarib beramiz.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  100% pulni qaytarish kafolati
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sertifikatlar va guvohnomalar
                </li>
              </ul>
            </div>
          </div>  
        </div>

        {/* CTA Section - yangilangan responsive */}
        <div className="text-center mt-12 sm:mt-16 bg-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-800 mb-4">Kelajagingizni bugun yarating!</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
            Bepul ro'yxatdan o'ting va platformamiz imkoniyatlarini kashf eting
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300 animate-pulse"
          >
            Hoziroq boshlash 🚀
          </button>
        </div>
      </div>

      {/* Modal - yangilangan responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ro'yxatdan o'tish</h3>
              <p className="text-gray-600">Bizning jamoaga qo'shiling va o'z kelajagingizni yarating!</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  F.I.O
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="To'liq ismingizni kiriting"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+998 90 123 45 67"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  Xabar
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="O'zingiz haqingizda qisqacha ma'lumot bering..."
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Yuborish
              </button>
            </form>

            {/* Additional Info */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Ro'yxatdan o'tish orqali bizning 
              <a href="#" className="text-blue-600 hover:underline"> maxfiylik siyosati</a> va
              <a href="#" className="text-blue-600 hover:underline"> foydalanish shartlari</a>ga rozilik bildirasiz
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default IjodiyHamkorlik;