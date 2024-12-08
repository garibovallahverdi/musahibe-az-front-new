import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

const HeroSection = () => {
  const mainNews = [
    {
      title: "Son Dakika: Ekonomi Zirvesinde Çarpıcı Gelişmeler",
      excerpt: "Bugün yapılan zirvede ekonomik dengeler ve gelecek planları konuşuldu.",
      image:
        "https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Spor: Şampiyonlar Ligi'nde Büyük Heyecan",
      excerpt: "Tüm futbolseverlerin beklediği final maçı nefes kesti.",
      image:
        "https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Teknoloji: Yeni iPhone Modelleri Tanıtıldı",
      excerpt: "Apple, teknoloji dünyasına yeni ürünlerini sundu.",
      image:
        "https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    if (isSliding) return; 
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === mainNews.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500); // Animasyon süresiyle uyumlu
  };



  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5 saniyede bir otomatik kayma
    return () => clearInterval(interval);
  }, []);

  const slug = generateSlug(mainNews[currentIndex].title);

  return (
    <div className="max-w-[1350px] w-full  mx-auto  p-4 flex flex-col lg:flex-row gap-4">
      {/* Sol Büyük Haberler (Carousel) */}
      <div className="w-full lg:w-2/3 relative overflow-hidden rounded-xl">
          <div
            className="relative w-full flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <Link to={`reading/${slug}`} className="flex w-full">
            {mainNews.map((news, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-80 md:h-[450px] relative"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 text-white space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    {news.title}
                  </h2>
                  <p className="text-sm md:text-base line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            ))}
            </Link>
          </div>
        {/* Kontroller */}
       
      </div>

      {/* Sağ Küçük Haberler */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        {mainNews.map((news, index) => (
        <Link to={`reading/${slug}`}>

          <div
            key={index}
            className={`grid grid-cols-5 items-center cursor-pointer gap-4 bg-white rounded-lg shadow-md overflow-hidden `}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-36 h-36 object-cover col-span-2 p-2 rounded-xl"
            />
            <div className="flex flex-col col-span-3">
              <h3 className="text-sm font-semibold text-gray-700">
                {news.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {news.excerpt}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
