import React from 'react';
import { Upload } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FileUpload: React.FC = () => {
  const { addFiles } = useAppContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(Array.from(event.target.files));
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Încărcați Poze</h2>
      <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2">
          <Upload className="w-6 h-6 text-gray-600" />
          <span className="font-medium text-gray-600">
            Apăsați pentru a încărca sau trageți și plasați fișierele aici
          </span>
        </span>
        <input type="file" name="file_upload" className="hidden" onChange={handleFileChange} multiple />
      </label>
    </div>
  );
};

export default FileUpload;