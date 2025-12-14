import React, { useState } from 'react';
import { images } from './ImageData';

const ImageList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageStyle = (index) => {
   
    if (index === 10) { 
      return "w-full h-80 object-cover object-center"; 
    }
    return "w-full h-[550px] object-cover object-center"; 
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="aspect-w-4 aspect-h-3"> 
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className={getImageStyle(index)}
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-center text-sm font-medium">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-opacity duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageList;