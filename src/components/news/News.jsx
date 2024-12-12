import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function News() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsData = [
    {
      id: 1,
      title: "🎓 Masofaviy Ta'lim Platformasi Yangilandi",
      date: "2024-03-20",
      image: "https://picsum.photos/id/231/800/400",
      description:
        "O'quv jarayonini qo'llab-quvvatlash tizimida yangi funksiyalar qo'shildi...",
      category: "Platforma",
      author: "Texnik Qo'llab-quvvatlash Markazi",
      tags: ["ta'lim", "texnologiya", "yangilik", "platforma"],
      fullContent: [
        {
          subtitle: "Yangi Imkoniyatlar",
          text: "Yangilangan platforma quyidagi imkoniyatlarni taqdim etadi: video darslarni yuklash, guruh muhokamalarini tashkil etish, onlayn testlar o'tkazish va ko'p boshqa qulayliklar. O'qituvchilar uchun maxsus panel orqali dars materiallarini boshqarish va talabalar faoliyatini kuzatish imkoniyati yaratildi.",
          image: "https://picsum.photos/id/239/800/400",
          imageCaption: "Yangi platformaning bosh sahifasi",
        },
        {
          subtitle: "Foydalanuvchilar uchun Qulayliklar",
          text: "Talabalar endi mobil qurilmalar orqali ham platformadan bemalol foydalanishlari mumkin. Bundan tashqari, video darslarni oflayn rejimda ko'rish imkoniyati ham qo'shildi. Platforma interfeysi zamonaviy va qulay ko'rinishga ega bo'lib, barcha yoshdagi foydalanuvchilar uchun moslashtrilgan.",
        },
        {
          subtitle: "Texnik Xususiyatlar",
          text: "Platforma eng so'nggi texnologiyalar asosida ishlab chiqilgan bo'lib, yuqori darajadagi xavfsizlik va tezlikni ta'minlaydi. Tizim cloud texnologiyalari asosida ishlaydi va bir vaqtning o'zida minglab foydalanuvchilarni qo'llab-quvvatlash imkoniyatiga ega.",
          image: "https://picsum.photos/id/240/800/400",
          imageCaption: "Platformaning texnik infratuzilmasi",
        },
      ],
    },
    {
      id: 2,
      title: "💻 Elektron Jurnal Tizimi Ishga Tushdi",
      date: "2024-03-18",
      image: "https://picsum.photos/id/232/800/400",
      description:
        "Yangi elektron jurnal tizimi ishga tushirildi. O'qituvchilar endi baholash va davomat yuritishni onlayn amalga oshirishlari mumkin.",
      category: "Yangilik",
      author: "LMS Administratori",
      tags: ["jurnal", "baholash", "innovatsiya", "ta'lim"],
      fullContent: [
        {
          subtitle: "Tizim Afzalliklari",
          text: "Elektron jurnal tizimi o'qituvchilar va ma'muriyat uchun qator qulayliklarni taqdim etadi. Jumladan, avtomatik hisobotlar tuzish, ota-onalar uchun monitoring tizimi va talabalar reytingini kuzatish imkoniyatlari mavjud.",
          image: "https://picsum.photos/id/241/800/400",
          imageCaption: "Elektron jurnal interfeysi",
        },
        {
          subtitle: "Ota-onalar uchun Monitoring",
          text: "Ota-onalar maxsus mobil ilova orqali farzandlarining o'zlashtirishi va davomatini kunlik kuzatib borish imkoniyatiga ega bo'lishdi. Tizim orqali o'qituvchilar bilan to'g'ridan-to'g'ri muloqot qilish ham mumkin.",
        },
        {
          subtitle: "Statistik Tahlil",
          text: "Tizim orqali har bir o'quvchining individual o'zlashtirish ko'rsatkichlari, fan bo'yicha umumiy statistika va boshqa muhim ma'lumotlarni olish mumkin. Bu esa ta'lim sifatini oshirishga yordam beradi.",
          image: "https://picsum.photos/id/242/800/400",
          imageCaption: "Statistik ma'lumotlar tahlili",
        },
      ],
    },
    {
      id: 3,
      title: "🌍 Xalqaro Hamkorlik Kengaymoqda",
      date: "2024-03-15",
      image: "https://picsum.photos/id/233/800/400",
      description:
        "Harvard va Oxford universitetlari bilan yangi hamkorlik shartnomasi imzolandi. Bu shartnoma doirasida 100 dan ortiq talabalarimiz xorijda ta'lim olish imkoniyatiga ega bo'lishadi.",
      category: "Hamkorlik",
      author: "Xalqaro aloqalar bo'limi",
      tags: ["xalqaro", "universitet", "hamkorlik", "ta'lim"],
      fullContent: [
        {
          subtitle: "Hamkorlik Shartlari",
          text: "Shartnoma doirasida talabalar almashinuvi, professor-o'qituvchilar malaka oshirishi va qo'shma tadqiqot loyihalari amalga oshiriladi. Hamkorlik 5 yillik muddatga mo'ljallangan bo'lib, har yili 20 dan ortiq talaba almashinuvi rejalashtirilgan.",
          image: "https://picsum.photos/id/243/800/400",
          imageCaption: "Shartnoma imzolash marosimi",
        },
        {
          subtitle: "Grantlar va Stipendiyalar",
          text: "Xalqaro hamkorlik doirasida iqtidorli talabalar uchun maxsus grant dasturlari e'lon qilindi. Stipendiyalar o'qish, yotoqxona va kundalik xarajatlarni to'liq qoplaydi.",
        },
        {
          subtitle: "Ilmiy Hamkorlik",
          text: "Universitetlar o'rtasida qo'shma ilmiy loyihalar amalga oshiriladi. Bu loyihalar doirasida zamonaviy laboratoriyalar tashkil etiladi va ilmiy tadqiqotlar olib boriladi.",
          image: "https://picsum.photos/id/244/800/400",
          imageCaption: "Xalqaro ilmiy konferensiya",
        },
      ],
    },
    {
      id: 4,
      title: "🔬 Innovatsion Laboratoriya Ochildi",
      date: "2024-03-14",
      image: "https://picsum.photos/id/234/800/400",
      description:
        "5 million dollarlik zamonaviy laboratoriya jihozlari o'rnatildi. Bu laboratoriyada nano-texnologiyalar va bio-tibbiyot sohasida tadqiqotlar olib boriladi.",
      category: "Innovatsiya",
      author: "Dr. Karimov B.",
      tags: ["laboratoriya", "innovatsiya", "tadqiqot", "texnologiya"],
      fullContent: [
        {
          subtitle: "Laboratoriya Imkoniyatlari",
          text: "Yangi laboratoriya eng zamonaviy jihozlar bilan ta'minlangan bo'lib, nano-materiallar sintezi, biologik namunalar tahlili va yuqori aniqlikdagi o'lchov ishlari olib borish imkoniyatiga ega.",
          image: "https://picsum.photos/id/245/800/400",
          imageCaption: "Laboratoriya jihozlari",
        },
        {
          subtitle: "Tadqiqot Yo'nalishlari",
          text: "Laboratoriyada asosan nano-texnologiyalar, bio-tibbiyot va yangi materiallar yaratish bo'yicha tadqiqotlar olib boriladi. Bu sohalar bo'yicha xalqaro grantlar ham jalb qilingan.",
        },
        {
          subtitle: "Talabalar uchun Imkoniyatlar",
          text: "Magistratura va doktorantura talabalari laboratoriyada o'z tadqiqotlarini olib borish imkoniyatiga ega. Har yili 20 dan ortiq ilmiy loyihalar amalga oshiriladi.",
          image: "https://picsum.photos/id/246/800/400",
          imageCaption: "Talabalar tadqiqot jarayonida",
        },
      ],
    },
    // ... oldingi 4 ta element

    {
      id: 5,
      title: "🏆 Xalqaro Olimpiada G'oliblari",
      date: "2024-03-12",
      image: "https://picsum.photos/id/235/800/400",
      description:
        "Bizning talabalarimiz matematika bo'yicha xalqaro olimpiadada 3 ta oltin, 5 ta kumush medalni qo'lga kiritishdi.",
      category: "Sport",
      author: "Sport bo'limi",
      tags: ["olimpiada", "g'alaba", "sport", "matematika"],
      fullContent: [
        {
          subtitle: "Olimpiada Natijalari",
          text: "Xalqaro matematika olimpiadasida universitetimiz talabalari rekord natijani qayd etishdi. 3 ta oltin, 5 ta kumush va 7 ta bronza medal qo'lga kiritildi. Bu natija o'tgan yilgi ko'rsatkichdan 40% yuqori.",
          image: "https://picsum.photos/id/247/800/400",
          imageCaption: "G'olib talabalarimiz",
        },
        {
          subtitle: "Tayyorgarlik Jarayoni",
          text: "G'alabaga erishish uchun talabalarimiz 6 oy davomida maxsus tayyorgarlik ko'rishdi. Mashg'ulotlar dunyoning yetakchi professorlari tomonidan olib borildi. Kuniga 8 soatlik mashg'ulotlar va muntazam sinovlar o'tkazildi.",
        },
        {
          subtitle: "Kelajak Rejalari",
          text: "Kelgusi yil uchun yanada kuniqarli natijalarni ko'zlayapmiz. Buning uchun maxsus tayyorgarlik dasturi ishlab chiqildi va qo'shimcha moliyaviy resurslar ajratildi.",
          image: "https://picsum.photos/id/248/800/400",
          imageCaption: "Tayyorgarlik jarayonidan lavha",
        },
      ],
    },
    {
      id: 6,
      title: "🎯 Startup Loyihalar Tanlovi",
      date: "2024-03-10",
      image: "https://picsum.photos/id/236/800/400",
      description:
        "Eng yaxshi startup g'oyalar uchun 100,000 dollarlik grant e'lon qilindi.",
      category: "Startaplar",
      author: "Innovatsiya markazi",
      tags: ["startup", "innovatsiya", "grant", "loyiha"],
      fullContent: [
        {
          subtitle: "Grant Shartlari",
          text: "Tanlovda barcha fakultet talabalari ishtirok etishi mumkin. Loyihalar innovatsion g'oyalarga asoslangan bo'lishi va amalga oshirish rejasiga ega bo'lishi kerak. G'olib loyihalar 6 oylik inkubatsiya dasturiga qabul qilinadi.",
          image: "https://picsum.photos/id/249/800/400",
          imageCaption: "O'tgan yilgi g'olib startaplar",
        },
        {
          subtitle: "Mentorlik Dasturi",
          text: "Tanlov ishtirokchilari uchun maxsus mentorlik dasturi tashkil etiladi. Tajribali biznesmenlar va ekspertlar loyiha ishtirokchilariga maslahatlar berishadi va yo'nalish ko'rsatishadi.",
        },
        {
          subtitle: "Moliyalashtirish Shartlari",
          text: "Grant mablag'lari bosqichma-bosqich ajratiladi. Har bir bosqich yakunida hisobot taqdim etilishi va belgilangan ko'rsatkichlarga erishilishi talab etiladi.",
          image: "https://picsum.photos/id/250/800/400",
          imageCaption: "Grant taqdimoti marosimi",
        },
      ],
    },
    {
      id: 7,
      title: "📚 Raqamli Kutubxona Loyihasi",
      date: "2024-03-08",
      image: "https://picsum.photos/id/237/800/400",
      description:
        "1 million kitobdan ortiq elektron resurslarni o'z ichiga olgan raqamli kutubxona ishga tushirildi.",
      category: "Kutubxona",
      author: "Axborot resurs markazi",
      tags: ["kutubxona", "raqamli", "ta'lim", "resurs"],
      fullContent: [
        {
          subtitle: "Kutubxona Imkoniyatlari",
          text: "Yangi raqamli kutubxona tizimi dunyoning yetakchi nashriyotlari va elektron kutubxonalari bilan hamkorlikda yaratildi. Tizimda 1 milliondan ortiq kitob, jurnal va ilmiy maqolalar mavjud.",
          image: "https://picsum.photos/id/251/800/400",
          imageCaption: "Raqamli kutubxona interfeysi",
        },
        {
          subtitle: "Foydalanish Qulayliklari",
          text: "Kutubxonadan foydalanish uchun maxsus dastur ishlab chiqildi. Talabalar va o'qituvchilar istalgan vaqtda, istalgan qurilma orqali tizimga kirishlari va resurslardan foydalanishlari mumkin.",
        },
        {
          subtitle: "Yangi Funksiyalar",
          text: "Tizimda kitoblarni belgilash, eslatmalar qoldirish va boshqa foydalanuvchilar bilan fikr almashish imkoniyatlari mavjud. Shuningdek, sun'iy intellekt asosida tavsiyalar berish tizimi ham joriy etilgan.",
          image: "https://picsum.photos/id/252/800/400",
          imageCaption: "Mobil ilova interfeysi",
        },
      ],
    },
    {
      id: 8,
      title: "🌟 Yangi Magistratura Dasturlari",
      date: "2024-03-06",
      image: "https://picsum.photos/id/238/800/400",
      description:
        "10 ta yangi magistratura dasturi ochildi. Dasturlar sun'iy intellekt, kiberxavfsizlik va raqamli marketing yo'nalishlarini qamrab oladi.",
      category: "Ta'lim",
      author: "O'quv bo'limi",
      tags: ["magistratura", "ta'lim", "dastur", "innovatsiya"],
      fullContent: [
        {
          subtitle: "Yangi Yo'nalishlar",
          text: "Yangi magistratura dasturlari zamonaviy kasb yo'nalishlarini qamrab oladi. Sun'iy intellekt, kiberxavfsizlik, raqamli marketing, data science va boshqa yo'nalishlar bo'yicha mutaxassislar tayyorlanadi.",
          image: "https://picsum.photos/id/253/800/400",
          imageCaption: "Yangi o'quv binosi",
        },
        {
          subtitle: "O'quv Dasturi",
          text: "Dasturlar xalqaro standartlar asosida ishlab chiqilgan bo'lib, amaliy ko'nikmalarni rivojlantirishga qaratilgan. O'quv jarayoniga xorijiy mutaxassislar jalb etilgan.",
        },
        {
          subtitle: "Imtiyozlar va Grantlar",
          text: "Iqtidorli talabalar uchun maxsus grant dasturlari joriy etilgan. Shuningdek, yetakchi kompaniyalar bilan hamkorlikda amaliyot o'tash imkoniyatlari yaratilgan.",
          image: "https://picsum.photos/id/254/800/400",
          imageCaption: "Grant g'oliblari bilan uchrashuv",
        },
      ],
    },
  ];

  const newsItem = newsData.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Yangilik topilmadi
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - responsive updates */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 h-full flex items-end pb-8 md:pb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  {newsItem.category}
                </span>
                <span className="text-gray-200 text-xs md:text-sm">{newsItem.date}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                {newsItem.title}
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${newsItem.author}&background=random`}
                  alt={newsItem.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{newsItem.author}</p>
                  <p className="text-gray-300 text-sm">Muallif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - responsive updates */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-base md:prose-lg max-w-none">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              {newsItem.description}
            </p>

            {/* Content blocks with responsive spacing */}
            {newsItem.fullContent?.map((content, index) => (
              <div key={index} className="mb-6 md:mb-8">
                {content.subtitle && (
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                    {content.subtitle}
                  </h2>
                )}
                {content.text && (
                  <p className="text-gray-700 leading-relaxed">
                    {content.text}
                  </p>
                )}
                {content.image && (
                  <div className="my-6">
                    <img
                      src={content.image}
                      alt={content.imageCaption || ""}
                      className="w-full rounded-lg shadow-lg"
                    />
                    {content.imageCaption && (
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        {content.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags Section - responsive updates */}
          {newsItem.tags && (
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
                Teglar:
              </h3>
              <div className="flex flex-wrap gap-2">
                {newsItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section - responsive updates */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ulashing:
            </h3>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
