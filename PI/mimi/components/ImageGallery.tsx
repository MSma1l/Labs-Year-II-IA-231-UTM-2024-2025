import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ImageGallery: React.FC = () => {
  const { uploadedFiles } = useAppContext();
  const recentImages = uploadedFiles.slice(-3).reverse();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Imagini Recente</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentImages.map((file, index) => (
          <div key={index} className="relative group">
            <img
              src={URL.createObjectURL(file)}
              alt={`Imagine recentă ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-custom"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to="/galerie" className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300">
          Vezi toate imaginile
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;