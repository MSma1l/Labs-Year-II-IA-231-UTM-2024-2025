import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Briefcase, Landmark, MapPin, BookOpen, Calendar } from 'lucide-react';

const MainContent = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Descoperă Comuna Iscalau</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link to="/locuri-de-vizitat/biserica-veche" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Landmark className="mr-2" /> Bisericile
          </h3>
          <p className="text-text">Explorează spiritualitatea și arhitectura bisericilor noastre istorice din Iscalău, Doltu și Burghelea.</p>
        </Link>
        <Link to="/locuri-de-vizitat/parcul-central" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <MapPin className="mr-2" /> Parcurile
          </h3>
          <p className="text-text">Relaxează-te în oazele de verdeață din Iscalău, Doltu și Burghelea, perfecte pentru plimbări și recreere.</p>
        </Link>
        <Link to="/locuri-de-vizitat/muzeul-local" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Landmark className="mr-2" />Casa de Cultură
          </h3>
          <p className="text-text">Descoperă centrul vieții culturale și sociale din Iscalău, Doltu și Burghelea.</p>
        </Link>
        <Link to="/locuri-de-vizitat/monumente" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Landmark className="mr-2" /> Monumente
          </h3>
          <p className="text-text">Onorează istoria și eroii locali prin monumentele din Iscalău, Doltu și Burghelea.</p>
        </Link>
        <Link to="/locuri-de-vizitat/povesti-si-legende" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <BookOpen className="mr-2" /> Povești și Legende
          </h3>
          <p className="text-text">Lasă-te captivat de poveștile și legendele fascinante ale comunei noastre.</p>
        </Link>
        <Link to="/calendar" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Calendar className="mr-2" /> Calendar de Evenimente
          </h3>
          <p className="text-text">Fii la curent cu evenimentele și activitățile din comunitatea noastră.</p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center text-text">Proiecte și Resurse</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/proiecte" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Briefcase className="mr-2" /> Proiecte
          </h3>
          <p className="text-text">Descoperă proiectele de dezvoltare și inițiativele locale în desfășurare.</p>
        </Link>
        <Link to="/biblioteci" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-primary">
            <Book className="mr-2" /> Biblioteci
          </h3>
          <p className="text-text">Explorează resursele educaționale și culturale disponibile în bibliotecile noastre.</p>
        </Link>
      </div>
    </section>
  );
};

export default MainContent;