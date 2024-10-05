import React, { useState } from 'react';
import { images } from './ImageData';

const ImageList = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track clicked image

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative border rounded-lg overflow-hidden shadow-lg"
            onClick={() => setSelectedImage(image.src)} // Set image on click
          >
            <img 
              src={image.src} 
              alt={`Gallery image ${index + 1}`} 
              className={`w-full h-72 object-cover ${
                [7, 8, 11, 12].includes(index + 1) ? 'object-top' : 'object-center'
              }`} 
            />
            <div className="p-4">
              <p className="text-center text-sm font-medium">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)} 
        >
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-[700px] h-[500px] object-contain" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageList;
