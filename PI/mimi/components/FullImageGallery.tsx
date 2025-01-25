import React from 'react';
import { X, Upload } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FullImageGallery: React.FC = () => {
  const { uploadedFiles, removeFile, addFiles } = useAppContext();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(Array.from(event.target.files));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Galeria Completă de Imagini</h1>
      
      <div className="mb-8">
        <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <Upload className="w-6 h-6 text-gray-600" />
            <span className="font-medium text-gray-600">
              Apăsați pentru a încărca sau trageți și plasați imaginile aici
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" onChange={handleFileUpload} multiple accept="image/*" />
        </label>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="relative group">
            <img
              src={URL.createObjectURL(file)}
              alt={`Imagine încărcată ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-custom"
            />
            <button
              onClick={() => removeFile(index)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullImageGallery;