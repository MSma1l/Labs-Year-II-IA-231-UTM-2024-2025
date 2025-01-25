import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-custom">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Comuna Iscalau</Link>
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="flex items-center text-text hover:text-primary transition duration-300">
                Administrație <ChevronDown className="ml-1" size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-white text-text p-2 rounded shadow-custom">
                <li><Link to="/primar" className="block py-1 px-2 hover:bg-background transition duration-300">Primarul</Link></li>
                <li><Link to="/consiliu" className="block py-1 px-2 hover:bg-background transition duration-300">Consiliul</Link></li>
              </ul>
            </div>
            <Link to="/economie" className="text-text hover:text-primary transition duration-300">Economie</Link>
            <Link to="/proiecte" className="text-text hover:text-primary transition duration-300">Proiecte</Link>
            <Link to="/biblioteci" className="text-text hover:text-primary transition duration-300">Biblioteci</Link>
            <Link to="/locuri-de-vizitat" className="text-text hover:text-primary transition duration-300">Locuri de Vizitat</Link>
            <Link to="/calendar" className="text-text hover:text-primary transition duration-300">Calendar</Link>
            <Link to="/galerie" className="text-text hover:text-primary transition duration-300">Galerie</Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/primar" className="block py-2 text-text hover:text-primary transition duration-300">Primarul</Link>
            <Link to="/consiliu" className="block py-2 text-text hover:text-primary transition duration-300">Consiliul</Link>
            <Link to="/economie" className="block py-2 text-text hover:text-primary transition duration-300">Economie</Link>
            <Link to="/proiecte" className="block py-2 text-text hover:text-primary transition duration-300">Proiecte</Link>
            <Link to="/biblioteci" className="block py-2 text-text hover:text-primary transition duration-300">Biblioteci</Link>
            <Link to="/locuri-de-vizitat" className="block py-2 text-text hover:text-primary transition duration-300">Locuri de Vizitat</Link>
            <Link to="/calendar" className="block py-2 text-text hover:text-primary transition duration-300">Calendar</Link>
            <Link to="/galerie" className="block py-2 text-text hover:text-primary transition duration-300">Galerie</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;