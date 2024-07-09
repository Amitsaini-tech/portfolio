import React, { useEffect, useState } from 'react';

// Import local media files
import image1 from '../Images/181 (2).png';
import image2 from '../Images/182.png';
import image3 from '../Images/183.png';
import image4 from '../Images/184.png';
import image5 from '../Images/185.png';
import image6 from '../Images/186.png';
import video1 from '../Images/read.mp4';


const mediaFiles = [
  { type: 'image', src: image1 },
  { type: 'image', src: image2 },
  { type: 'image', src: image3 },
  { type: 'image', src: image4 },
  { type: 'image', src: image5 },
  { type: 'image', src: image6 },
  { type: 'video', src: video1 },
  
];

const MediaCarousel = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMediaClick = () => {
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className="flex flex-col items-center z-0">
      {!showGallery ? (
        <div className="relative">
          {mediaFiles[currentMediaIndex].type === 'image' ? (
            <img
              src={mediaFiles[currentMediaIndex].src}
              alt="Media Carousel"
              className="w-full h-auto cursor-pointer"
              onClick={handleMediaClick}
            />
          ) : (
            <video
              src={mediaFiles[currentMediaIndex].src}
              className="w-full h-auto cursor-pointer"
              onClick={handleMediaClick}
              controls
              autoPlay
              loop
            />
          )}
        </div>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-wrap justify-center items-center p-4">
          {mediaFiles.map((media, index) => (
            <div key={index} className="w-1/3 p-2">
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={media.src}
                  className="w-full h-auto"
                  controls
                  loop
                />
              )}
            </div>
          ))}
          <button
            className="absolute top-4 right-4 text-white bg-gray-800 px-4 py-2 rounded"
            onClick={handleCloseGallery}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;
