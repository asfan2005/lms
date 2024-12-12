import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Asosiy ma'lumot */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">O'quv Jarayonini Qo'llab Quvvatlash Tizimi</h4>
            <p className="text-gray-400">
              Ta'lim jarayonlarini samarali boshqarish va nazorat qilish tizimi
            </p>
            <p className="mt-4 text-gray-400">
              &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan
            </p>
          </div>

          {/* Foydali havolalar */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-4">Foydali havolalar</h5>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-400 hover:text-white transition duration-300">
                  Kurslar
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Aloqa
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition duration-300">
                  Ko'p so'raladigan savollar
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-4">Biz bilan bog'laning</h5>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/aEhE2YqwgAZVP7Ha6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 flex items-center justify-center md:justify-start"
              >
                <FaMapMarkerAlt className="mr-2 text-xl" />
                <span>Buxoro shahri, Navoiy shox ko'chasi</span>
              </a>
              <a 
                href="tel:++998945436565" 
                className="text-gray-400 hover:text-white transition duration-300 flex items-center justify-center md:justify-start"
              >
                <FaPhone className="mr-2 text-xl" />
                <span>+998 94 543 65 65</span>
              </a>
              <a 
                href="mailto:orif_haydarov@mail.ru"
                className="text-gray-400 hover:text-white transition duration-300 flex items-center justify-center md:justify-start"
              >
                <FaEnvelope className="mr-2 text-xl" />
                <span>orif_haydarov@mail.ru</span>
              </a>
            </div>
            
            {/* Ijtimoiy tarmoqlar */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="@OrifjonRustamovich" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300">
                <FaTelegram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;