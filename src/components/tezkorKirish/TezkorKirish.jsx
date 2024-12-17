import React, { useState } from "react";
import { 
  BookOpenIcon, 
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserPlusIcon,
  PresentationChartLineIcon,
  VideoCameraIcon,
  DocumentArrowDownIcon,
  ClockIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  KeyIcon,
  ClipboardIcon,
  ArrowUpTrayIcon,
  PencilSquareIcon,
  FilmIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  PresentationChartBarIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';

function TezkorKirish() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    role: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { login, password, role } = formData;

    // Validate form data
    if (!login || !password || !role) {
      alert('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('login', login);
    formDataToSend.append('parol', password);
    formDataToSend.append('rol', role);
    formDataToSend.append('ans_id', '252');
    formDataToSend.append('avtorizatsiya', '1');
    formDataToSend.append('javob', '2');

    try {
      const response = await axios.post('http://tjqqt.uz/index2.asp', formDataToSend, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      if (response.data) {
        setFormData({
          login: '',
          role: '',
          password: '',
        });
        setShowModal(false);

        // Redirect based on role
        switch (role) {
          case '3': // Menejer
            window.location.href = 'http://tjqqt.uz/lms_menjer.asp';
            break;
          case '2': // Ma'ruzachi
            window.location.href = 'http://tjqqt.uz/lms.asp';
            break;
          case '1': // Tinglovchi
            window.location.href = 'http://tjqqt.uz/lms_tinglovchi.asp';
            break;
          default:
            alert('Noma\'lum foydalanuvchi turi');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Tizimga kirishda xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="relative mb-12 sm:mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-[0.15]" />
        </div>
        <h2 
          onClick={() => setShowModal(true)}
          className="relative text-xl sm:text-2xl md:text-3xl font-bold text-center py-4 sm:py-6 px-4 sm:px-8 rounded-xl sm:rounded-2xl 
            bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm
            hover:from-blue-600/20 hover:to-purple-600/20
            cursor-pointer transition-all duration-300 hover:scale-105 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition-opacity" />
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
              group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
              O'quv jarayonini qo'llab quvvatlash tizimi imkoniyatlari
            </span>
            
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
              <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent" />
        </h2>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Tizimga kirish</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Login</label>
                <input 
                  type="text"
                  name="login"
                  value={formData.login}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Loginni kiriting"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Rol</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Rolni tanlang</option>
                  <option value="1">Tinglovchi</option>
                  <option value="2">Ma'ruzachi</option>
                  <option value="3">Menejer</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Parol</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Parolni kiriting"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Kirish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* O'quvchilar uchun */}
        <div className="group bg-white backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <AcademicCapIcon className="w-8 h-8 mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
            Talabalar uchun
          </h3>
          <div className="space-y-4">
            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <BookOpenIcon className="w-6 h-6 mr-2" />
                O'quv mashg'ulotlari materiallari
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-3 px-2">
                <VideoCameraIcon className="w-4 h-4 text-blue-500" />
                <span>Video darsliklar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <DocumentArrowDownIcon className="w-4 h-4 text-blue-500" />
                <span>Mavzu materiallari</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <PresentationChartLineIcon className="w-4 h-4 text-blue-500" />
                <span>Taqdimotlar</span>
              </div>
            </div>
            
            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2" />
                Nazorat vazifalarini bajarish
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-3 px-2">
                <DocumentCheckIcon className="w-4 h-4 text-green-500" />
                <span>Test topshiriqlari</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <ClipboardIcon className="w-4 h-4 text-green-500" />
                <span>Amaliy mashg'ulotlar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <ChartBarIcon className="w-4 h-4 text-green-500" />
                <span>Natijalar tahlili</span>
              </div>
            </div>
          </div>
        </div>

        {/* O'qituvchilar uchun */}
        <div className="group bg-white backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <PresentationChartLineIcon className="w-8 h-8 mr-3 text-purple-500 group-hover:scale-110 transition-transform" />
           Professor - o'qituvchilar uchun
          </h3>
          <div className="space-y-4">
            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <BookOpenIcon className="w-6 h-6 mr-2" />
                Dars mashg'ulotlarini boshqarish
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-3 px-2">
                <CalendarDaysIcon className="w-4 h-4 text-purple-500" />
                <span>Dars jadvali</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <DocumentTextIcon className="w-4 h-4 text-purple-500" />
                <span>Mavzular rejasi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <ClockIcon className="w-4 h-4 text-purple-500" />
                <span>Vaqt taqsimoti</span>
              </div>
            </div>
            
            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <BookOpenIcon className="w-6 h-6 mr-2" />
                Mavzu materiallarini boshqarish
              </button>
              <p className="text-sm text-gray-600 mt-2 px-2">
                <div className="flex items-center gap-2 mb-1">
                  <ArrowUpTrayIcon className="w-4 h-4 text-indigo-500" />
                   O'quv materiallarini yuklash
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <PencilSquareIcon className="w-4 h-4 text-indigo-500" />
                  Mavjud materiallarni tahrirlash
                </div>
                <div className="flex items-center gap-2">
                  <FilmIcon className="w-4 h-4 text-indigo-500" />
                   Video darsliklarni joylashtirish
                </div>
              </p>
            </div>

            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <ChartBarIcon className="w-6 h-6 mr-2" />
                Nazorat natijalarini boshqarish
              </button>
              <p className="text-sm text-gray-600 mt-2 px-2">
                <div className="flex items-center gap-2 mb-1">
                  <UserIcon className="w-4 h-4 text-green-500" />
                   O'quvchilar baholash
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <ClipboardDocumentListIcon className="w-4 h-4 text-green-500" />
                   Test natijalarini tekshirish
                </div>
                <div className="flex items-center gap-2">
                  <PresentationChartBarIcon className="w-4 h-4 text-green-500" />
                   Umumiy o'zlashtirish monitoringi
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* Administrator uchun */}
        <div className="group bg-white backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <UserPlusIcon className="w-8 h-8 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
            Administrator uchun
          </h3>
          <div className="space-y-4">
            <div>
              <button className="w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md">
                <UserPlusIcon className="w-6 h-6 mr-2" />
                Foydalanuvchilar huquqlarini boshqarish
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-3 px-2">
                <UserGroupIcon className="w-4 h-4 text-red-500" />
                <span>Yangi foydalanuvchilar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <KeyIcon className="w-4 h-4 text-red-500" />
                <span>Huquqlarni belgilash</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 px-2">
                <ClipboardDocumentCheckIcon className="w-4 h-4 text-red-500" />
                <span>Ro'yxatni nazorat qilish</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TezkorKirish;