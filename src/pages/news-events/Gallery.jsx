import React from 'react';
import ImageList from '../../components/image-list/ImageList';

const Gallery = () => {
  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-xl lg:text-3xl text-primary-100 font-semibold mb-4 text-center">Photo Gallery</h1>
      <ImageList />
    </div>
  );
}

export default Gallery;
