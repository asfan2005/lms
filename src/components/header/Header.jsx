import React, { useState } from "react";
import { FiSearch, FiSettings, FiBell, FiChevronDown, FiUser, FiLogOut, FiMoon, FiSun, FiGlobe, FiPhone, FiMail, FiMenu, FiCheckCircle, FiCalendar, FiHome, FiBarChart2, FiFileText, FiX, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
    login: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Foydalanuvchi ma'lumotlari
  const user = {
    name: "O.Haydarov",
    fullName: "Haydarov Orifjon Rustamovich",
    role: "Administrator",
    avatar: "https://ui-avatars.com/api/?name=O+Haydarov&background=0D8ABC&color=fff",
    phone: "+998 94 543 65 65",
    email: "orif_haydarov@mail.ru"
  };

  // Bildirishnomalar uchun test ma'lumotlari
  const notifications = [
    {
      id: 1,
      title: "Yangi topshiriq",
      message: "Sizga yangi topshiriq tayinlandi",
      time: "5 daqiqa oldin",
      isRead: false,
      type: "task"
    },
    {
      id: 2,
      title: "Tizim yangilanishi",
      message: "Tizimda texnik ishlar olib borilmoqda",
      time: "1 soat oldin",
      isRead: false,
      type: "system"
    },
    {
      id: 3,
      title: "Dars jadvali o'zgarishi",
      message: "Ertangi dars jadvalida o'zgarish bor",
      time: "2 soat oldin",
      isRead: true,
      type: "schedule"
    }
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Active menu itemni aniqlash uchun funksiya
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Statistika sahifasiga o'tganda scroll qilish
  const handleStatisticsClick = (e) => {
    e.preventDefault();
    const isMobile = window.innerWidth < 768; // md breakpoint
    const scrollDistance = isMobile ? 2300 : 1450;
    
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
  };


  const handleNewsClick = (e) => {
    e.preventDefault();
    const isMobile = window.innerWidth < 768; 
    const scrollDistance = isMobile ? 3000 : 1700;
    
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
  
    // Check if it's the login form
    if (authMode === 'login') {
      const { login, password, role } = formData;
  
      // Validate form data
      if (!login || !password || !role) {
        alert('Iltimos, barcha maydonlarni to\'ldiring');
        return;
      }
  
      // Prepare data to send
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('login', login);
      formDataToSend.append('parol', password);
      formDataToSend.append('rol', role);
      formDataToSend.append('ans_id', '252');
      formDataToSend.append('avtorizatsiya', '1');
      formDataToSend.append('javob', '2');
  
      try {
        // Send login request
        const response = await axios.post('http://tjqqt.uz/index2.asp', formDataToSend, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
  
        // Handle successful response
        if (response.data) {
          setFormData({
            login: '',
            role: '',
            password: '',
          });
          setIsAuthModalOpen(false);

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
        // Handle error
        console.error('Login error:', error);
        alert('Tizimga kirishda xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
      }
    } else {
      // If it's not the login mode, alert the user
      alert('Ro\'yxatdan o\'tish funksiyasi hozircha mavjud emas');
    }
  };  

  return (
    <>
      <header className="bg-white shadow-md relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo va Tizim nomi */}
            <div className="flex items-center space-x-4">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" 
                alt="Logo" 
                className="h-8 w-8 md:h-10 md:w-10 hover:rotate-180 transition-transform duration-500" 
              />
              <h1 className="text-sm md:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                <span className="hidden md:inline">O'quv jarayonini qo'llab quvvatlash tizimi</span>
                <span className="md:hidden">O'quv jarayoni</span>
              </h1>
            </div>

            {/* Mobil menyu tugmasi */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <FiMenu className="h-6 w-6 text-gray-600" />
            </button>

            {/* Desktop Navigatsiya */}
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="/" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  isActivePath('/') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FiHome className="h-5 w-5" />
                <span>Bosh sahifa</span>
              </a>
              <a 
                href="/statistics" 
                onClick={handleStatisticsClick}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  isActivePath('/statistics') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FiBarChart2 className="h-5 w-5" />
                <span>Statistikalar</span>
              </a>
              <a 
                href="/news" 
                onClick={handleNewsClick}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  isActivePath('/news') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FiFileText className="h-5 w-5" />
                <span>Yangiliklar</span>
              </a>
            </nav>

            {/* Desktop O'ng tomon */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-300 relative"
                >
                  <FiBell className="text-gray-600 hover:text-blue-600 h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Bildirishnomalar Modal */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl py-3 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-3">
                          <FiBell className="h-5 w-5 text-blue-500" />
                          <span>Bildirishnomalar</span>
                        </h3>
                        
                        {unreadCount > 0 && (
                          <span className="text-sm bg-red-100 text-red-600 py-1 px-3 rounded-full">
                            {unreadCount} ta yangi
                          </span>
                        )}
                        
                        <button 
                          onClick={() => setIsNotificationsOpen(false)}
                          className="ml-4 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="max-h-[400px] overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                            !notification.isRead ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full flex-shrink-0 ${
                              notification.type === 'task' ? 'bg-green-100' :
                              notification.type === 'system' ? 'bg-orange-100' :
                              'bg-blue-100'
                            }`}>
                              {notification.type === 'task' && <FiCheckCircle className="h-5 w-5 text-green-600" />}
                              {notification.type === 'system' && <FiSettings className="h-5 w-5 text-orange-600" />}
                              {notification.type === 'schedule' && <FiCalendar className="h-5 w-5 text-blue-600" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-800 truncate">{notification.title}</h4>
                              <p className="text-sm text-gray-600 mt-1 break-words">{notification.message}</p>
                              <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-2 border-t border-gray-100 mt-2">
                      <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Barcha bildirishnomalarni ko'rish
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sozlamalar */}
              <div className="relative">
                <button 
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-300"
                >
                  <FiSettings className="text-gray-600 hover:text-blue-600 h-5 w-5" />
                </button>

                {/* Sozlamalar Modal */}
                {isSettingsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl py-3 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <FiSettings className="h-5 w-5 text-blue-500" />
                        <span>Bog'lanish</span>
                      </h3>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      {/* Telefon */}
                      <a 
                        href={`tel:${user.phone.replace(/\s/g, '')}`}
                        className="flex items-center p-3 hover:bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <FiPhone className="text-blue-600 h-5 w-5" />
                          </div>
                          <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">
                            {user.phone}
                          </span>
                        </div>
                      </a>

                      {/* Email */}
                      <a 
                        href={`mailto:${user.email}`}
                        className="flex items-center p-3 hover:bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <FiMail className="text-purple-600 h-5 w-5" />
                          </div>
                          <span className="text-gray-700 group-hover:text-purple-600 font-medium transition-colors">
                            {user.email}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="absolute top-2 right-2">
                      <button 
                        onClick={() => setIsSettingsOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Register Button - Desktop */}
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">Ro'yxatdan o'tish</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menyu Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Drawer Content */}
            <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl overflow-y-auto">
              <div className="p-4">
                {/* Close button */}
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX className="w-6 h-6 text-gray-600" />
                </button>

                {/* Mobile Navigation Links */}
                <nav className="mt-8 space-y-2">
                  <a 
                    href="/" 
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isActivePath('/') 
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <FiHome className="h-5 w-5" />
                    <span>Bosh sahifa</span>
                  </a>
                  <a 
                    href="/statistics" 
                    onClick={handleStatisticsClick}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isActivePath('/statistics') 
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <FiBarChart2 className="h-5 w-5" />
                    <span>Statistikalar</span>
                  </a>
                  <a 
                    href="/news" 
                    onClick={handleNewsClick}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isActivePath('/news') 
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <FiFileText className="h-5 w-5" />
                    <span>Yangiliklar</span>
                  </a>

                  {/* Mobile Notifications Button */}
                  <div className="w-full">
                    <button 
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <FiBell className="h-5 w-5" />
                        <span>Bildirishnomalar</span>
                      </div>
                      {unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {unreadCount}
                        </span>
                      )}
                    </button>

                    {/* Mobile Notifications Dropdown */}
                    {isNotificationsOpen && (
                      <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="p-3 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-800">Yangi bildirishnomalar</h3>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                          {notifications.map((notification) => (
                            <div 
                              key={notification.id}
                              className={`p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                                !notification.isRead ? 'bg-blue-50' : ''
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-full flex-shrink-0 ${
                                  notification.type === 'task' ? 'bg-green-100' :
                                  notification.type === 'system' ? 'bg-orange-100' :
                                  'bg-blue-100'
                                }`}>
                                  {notification.type === 'task' && <FiCheckCircle className="h-4 w-4 text-green-600" />}
                                  {notification.type === 'system' && <FiSettings className="h-4 w-4 text-orange-600" />}
                                  {notification.type === 'schedule' && <FiCalendar className="h-4 w-4 text-blue-600" />}
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-gray-800">{notification.title}</h4>
                                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                                  <span className="text-xs text-gray-500 mt-1 block">{notification.time}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="p-3 border-t border-gray-100">
                          <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Barchasini ko'rish
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Settings Button */}
                  <div className="w-full">
                    <button 
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <FiSettings className="h-5 w-5" />
                      <span>Sozlamalar</span>
                    </button>

                    {/* Mobile Settings Dropdown */}
                    {isSettingsOpen && (
                      <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-3 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-800">Bog'lanish</h3>
                        </div>
                        
                        <div className="p-3 space-y-3">
                          {/* Telefon */}
                          <a 
                            href={`tel:${user.phone.replace(/\s/g, '')}`}
                            className="w-full flex items-center p-2 hover:bg-gray-50 rounded-lg group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200">
                                <FiPhone className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-sm text-gray-700 group-hover:text-blue-600">{user.phone}</span>
                            </div>
                          </a>

                          {/* Email */}
                          <a 
                            href={`mailto:${user.email}`}
                            className="w-full flex items-center p-2 hover:bg-gray-50 rounded-lg group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200">
                                <FiMail className="h-4 w-4 text-purple-600" />
                              </div>
                              <span className="text-sm text-gray-700 group-hover:text-purple-600">{user.email}</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </nav>

                {/* Mobile User Profile */}
                <div className="mt-8 border-t pt-6">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                  >
                    <span className="mr-2">Ro'yxatdan o'tish</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Click outside handler overlay */}
        {(isProfileOpen || isSettingsOpen) && (
          <div 
            className="fixed inset-0 z-40"
            onClick={() => {
              setIsProfileOpen(false);
              setIsSettingsOpen(false);
            }}
          ></div>
        )}
      </header>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
            onClick={() => setIsAuthModalOpen(false)} 
          />

          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl max-w-md w-full p-8 overflow-hidden shadow-xl transform transition-all">
              {/* Close button */}
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5 text-gray-500" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {authMode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}
                </h2>
                <p className="mt-2 text-gray-600">
                  {authMode === 'login' 
                    ? 'O\'quv tizimiga xush kelibsiz' 
                    : 'Yangi hisob yaratish'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleAuthSubmit} className="space-y-6">
                {authMode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      To'liq ism
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>
                  </div>
                )}

                {authMode === 'login' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Login
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.login}
                        onChange={(e) => setFormData({...formData, login: e.target.value})}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                        placeholder="Loginingizni kiriting"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                )}

                {authMode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telefon
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Foydalanuvchi turi
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500 appearance-none bg-white"
                    >
                      <option value="">Rolni tanlang</option>
                      <option value="1">Tinglovchi</option>
                      <option value="2">Ma'ruzachi</option>
                      <option value="3">Menejer</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Parol
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-10 pr-12 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {authMode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parolni tasdiqlang
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <FiLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-10 pr-12 w-full px-4 py-2 border border-gray-300 rounded-xl outline-none transition-all duration-300 hover:border-blue-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-[1.02]"
                >
                  {authMode === 'login' ? 'Kirish' : 'Ro\'yxatdan o\'tish'}
                </button>

                {/* Enhanced Social Login Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        className="h-5 w-5 group-hover:animate-bounce"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Google</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        className="h-5 w-5 group-hover:animate-bounce"
                        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                        alt="Facebook"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Facebook</span>
                    </div>
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {authMode === 'login' ? (
                    <>
                      Hisobingiz yo'qmi?{' '}
                      <button
                        onClick={() => setAuthMode('register')}
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Ro'yxatdan o'ting
                      </button>
                    </>
                  ) : (
                    <>
                      Allaqachon hisobingiz bormi?{' '}
                      <button
                        onClick={() => setAuthMode('login')}
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Tizimga kiring
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;