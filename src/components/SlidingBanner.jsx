import React, { useState, useEffect } from "react";

const SlidingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 1, imageUrl: "https://via.placeholder.com/800x300?text=Aayush+1", title: "Banner 1" },
    { id: 2, imageUrl: "https://via.placeholder.com/800x300?text=Banner+2", title: "Banner 2" },
    { id: 3, imageUrl: "https://via.placeholder.com/800x300?text=Banner+3", title: "Banner 3" },
    { id: 4, imageUrl: "https://via.placeholder.com/800x300?text=Banner+4", title: "Banner 4  " }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-60 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full">
            <img src={banner.imageUrl} alt={banner.title} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
