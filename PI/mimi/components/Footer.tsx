import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Comuna Iscalau</h3>
            <p className="flex items-center"><Mail size={18} className="mr-2" /> primaria.iscalau@gmail.com</p>
            <p className="flex items-center"><Phone size={18} className="mr-2" /> +(373) 0XX XXX XXX</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="/proiecte" className="hover:text-accent transition duration-300">Proiecte</a></li>
              <li><a href="/economie" className="hover:text-accent transition duration-300">Economie</a></li>
              <li><a href="/locuri-de-vizitat" className="hover:text-accent transition duration-300">Locuri de Vizitat</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Urmăriți-ne</h3>
            <a href="https://www.facebook.com/groups/ISCALAU?locale=ru_RU" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-accent transition duration-300">
              <Facebook size={24} className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Comuna Iscalau. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;