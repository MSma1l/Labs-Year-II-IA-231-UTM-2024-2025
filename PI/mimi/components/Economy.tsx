import React, { useState } from 'react';
import { Upload, File } from 'lucide-react';

interface EconomyFile {
  name: string;
  type: string;
  size: number;
}

const Economy = () => {
  const [economyFiles, setEconomyFiles] = useState<EconomyFile[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      }));
      setEconomyFiles([...economyFiles, ...newFiles]);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">Economia Comunei Iscalau</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Încărcați Documente Economice</h3>
        <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <Upload className="w-6 h-6 text-gray-600" />
            <span className="font-medium text-gray-600">
              Apăsați pentru a încărca sau trageți și plasați fișierele aici
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" onChange={handleFileUpload} multiple />
        </label>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Documente Încărcate</h3>
        {economyFiles.length === 0 ? (
          <p>Nu există documente încărcate momentan.</p>
        ) : (
          <ul className="space-y-2">
            {economyFiles.map((file, index) => (
              <li key={index} className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
                <File className="w-5 h-5 text-gray-600" />
                <span>{file.name}</span>
                <span className="text-sm text-gray-500">({(file.size / 1024).toFixed(2)} KB)</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Economy;