import React, { useState } from 'react';
import { Upload, Book } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  available: boolean;
}

const Libraries = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({ title: '', author: '', available: true });
  const [libraryImages, setLibraryImages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', available: true });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setLibraryImages([...libraryImages, ...newImages]);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">Bibliotecile Comunei Iscalau</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Încarcă Imagini din Bibliotecă</h3>
        <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <Upload className="w-6 h-6 text-gray-600" />
            <span className="font-medium text-gray-600">
              Apăsați pentru a încărca sau trageți și plasați imaginile aici
            </span>
          </span>
          <input type="file" name="image_upload" className="hidden" onChange={handleImageUpload} multiple accept="image/*" />
        </label>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Galerie Imagini Bibliotecă</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {libraryImages.map((image, index) => (
            <img key={index} src={image} alt={`Library image ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Adaugă Carte Nouă</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titlu</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Adaugă Carte
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Cărți Disponibile</h3>
        {books.length === 0 ? (
          <p>Nu există cărți înregistrate momentan.</p>
        ) : (
          <ul className="space-y-2">
            {books.map((book, index) => (
              <li key={index} className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
                <Book className="w-5 h-5 text-gray-600" />
                <span className="font-medium">{book.title}</span>
                <span className="text-sm text-gray-500">de {book.author}</span>
                <span className={`ml-auto text-sm ${book.available ? 'text-green-500' : 'text-red-500'}`}>
                  {book.available ? 'Disponibil' : 'Împrumutat'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Libraries;