import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, MapPin, BookOpen } from 'lucide-react';

const places = [
  { id: 'biserica-veche', name: 'Bisericile', icon: Landmark },
  { id: 'parcul-central', name: 'Parcurile', icon: MapPin },
  { id: 'muzeul-local', name: 'Casa de Cultură', icon: Landmark },
  { id: 'monumente', name: 'Monumente', icon: Landmark },
  { id: 'povesti-si-legende', name: 'Povești și Legende', icon: BookOpen },
];

const PlacesToVisit = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">Locuri de Vizitat</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map((place) => (
          <Link
            key={place.id}
            to={`/locuri-de-vizitat/${place.id}`}
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            <place.icon className="w-6 h-6 mr-2 text-blue-600" />
            <span className="text-lg font-semibold">{place.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;