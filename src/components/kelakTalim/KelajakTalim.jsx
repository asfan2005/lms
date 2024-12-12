import React, { useState } from "react";
import { Header, Footer } from "../index";
import { FaGraduationCap, FaBook, FaUsers, FaLaptop, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';

function KelajakTalim() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda form ma'lumotlarini yuborish logikasini qo'shing
    console.log('Form submitted:', formData);
    // Formani yuborgandan keyin modalni yopish va formani tozalash
    setIsModalOpen(false);
    setFormData({ fullName: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 w-full">
        {/* Hero section - yangilangan */}
        <div className="text-center mb-12 relative">
          <div className="flex justify-center mb-4 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
              <FaGraduationCap className="text-9xl text-blue-600" />
            </div>
            <FaGraduationCap className="text-6xl text-blue-600 animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 animate-fade-in">
            Kelajagingiz bizning ustuvor vazifamiz!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 italic">
            Muvaffaqiyat kaliti - uzluksiz ta'limda
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-pulse">
              #ZamonaviyTalim
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-pulse delay-100">
              #KelajakBizBilan
            </span>
          </div>
        </div>

        {/* Main content - yangilangan */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaBook className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Zamonaviy Ta'lim
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Jahon standartlariga mos innovatsion ta'lim metodikasi
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaLaptop className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Onlayn Ta'lim
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Istalgan joydan turib ta'lim olish imkoniyati
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaUsers className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Jamoa bilan ishlash
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Guruh loyihalarida ishtirok etish imkoniyati
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaCertificate className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Sertifikatlar
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Xalqaro tan olingan sertifikatlarni qo'lga kiriting
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaChalkboardTeacher className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Malakali o'qituvchilar
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Tajribali va professional o'qituvchilar jamoasi
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
                  <FaGraduationCap className="text-3xl text-blue-600 relative z-10 group-hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                Kafolatlangan natija
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                O'z sohasida yuqori natijalarga erishish kafolati
              </p>
            </div>
          </div>

          {/* Motivation Section */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Ilhomlanish uchun motivatsiya
              </h2>
              <p className="text-gray-600 text-lg">
                Dunyo tan olgan shaxslarning hayotiy tajribalari
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quote Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg" 
                      alt="Steve Jobs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Vaqtingiz cheklangan, shuning uchun uni boshqa odamning hayotini yashash uchun sarflamang."
                  </blockquote>
                  <p className="font-bold text-blue-900">Steve Jobs</p>
                  <p className="text-sm text-gray-600">Apple kompaniyasi asoschisi</p>
                </div>
              </div>

              {/* Quote Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/800px-Bill_Gates_2017_%28cropped%29.jpg" 
                      alt="Bill Gates" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Agar siz tug'ilganingizda kambag'al bo'lsangiz, bu sizning aybingiz emas. Ammo agar siz katta bo'lganingizda kambag'al bo'lsangiz, bu sizning aybingiz."
                  </blockquote>
                  <p className="font-bold text-blue-900">Bill Gates</p>
                  <p className="text-sm text-gray-600">Microsoft asoschisi</p>
                </div>
              </div>

              {/* Quote Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg" 
                      alt="Elon Musk" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Muvaffaqiyatga erishish uchun har kuni ertalab soat 3 da uyg'onishingiz shart emas. Lekin nima qilayotganingizni aniq bilishingiz kerak."
                  </blockquote>
                  <p className="font-bold text-blue-900">Elon Musk</p>
                  <p className="text-sm text-gray-600">Tesla va SpaceX asoschisi</p>
                </div>
              </div>

              {/* Quote Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" 
                      alt="Mark Zuckerberg" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Eng katta risk - hech qanday risk qilmaslikdir. Tez o'zgarayotgan dunyoda, yagona muvaffaqiyatsizlik strategiyasi - risk qilmaslikdir."
                  </blockquote>
                  <p className="font-bold text-blue-900">Mark Zuckerberg</p>
                  <p className="text-sm text-gray-600">Meta asoschisi</p>
                </div>
              </div>

              {/* Quote Card 5 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg" 
                      alt="Jeff Bezos" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Men har doim o'zimga: agar bugun dunyodagi oxirgi kunim bo'lsa, men bugun qilmoqchi bo'lgan ishni bajarishni xohlayman."
                  </blockquote>
                  <p className="font-bold text-blue-900">Jeff Bezos</p>
                  <p className="text-sm text-gray-600">Amazon asoschisi</p>
                </div>
              </div>

              {/* Quote Card 6 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/800px-Warren_Buffett_KU_Visit.jpg" 
                      alt="Warren Buffett" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-4">
                    "Eng muhim investitsiya - bu o'zingizga qilgan investitsiyaningizdir. Bu sizning eng yaxshi aktivingiz bo'ladi."
                  </blockquote>
                  <p className="font-bold text-blue-900">Warren Buffett</p>
                  <p className="text-sm text-gray-600">Berkshire Hathaway CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - yangilangan */}
          <div className="text-center mt-12 space-y-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 opacity-50 blur-3xl"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 relative z-10">
              Kelajagingizni biz bilan birga quring!
            </h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-blue-600 hover:bg-blue-700 text-white text-base font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto relative z-10"
            >
              <FaGraduationCap className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Hoziroq ro'yxatdan o'ting</span>
              <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-md w-full p-6 md:p-8 animate-fade-in-up">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Ro'yxatdan o'tish
              </h3>
              <p className="text-gray-600">
                Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Input */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  FIO
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="To'liq ismingizni kiriting"
                />
              </div>

              {/* Phone Input */}
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Qo'shimcha ma'lumotlar..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Yuborish</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default KelajakTalim;