import React from 'react';
import { useParams } from 'react-router-dom';

interface PlaceInfo {
  id: string;
  name: string;
  description: string;
  images: string[];
}

const places: PlaceInfo[] = [
  {
    id: 'biserica-veche',
    name: 'Biserica Sf.Ioan Teologul (s.Ișcălău)',
    description:
      'Biserica din satul Iscalău este o mărturie vie a credinței și tradiției comunității care o înconjoară. Cu ziduri încărcate de istorie, ea reprezintă nu doar un loc de rugăciune, ci și o legătură profundă între generații. Fiecare clopot ce răsună cheamă oamenii să se adune în smerenie și rugăciune, amintindu-le de valorile creștine ce i-au unit de-a lungul anilor.',
    images: [
      'https://scontent.fkiv1-1.fna.fbcdn.net/v/t39.30808-6/462367141_2004624759989055_8388965152406986464_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bG_onp9D988Q7kNvgHrLNl_&_nc_ht=scontent.fkiv1-1.fna&_nc_gid=AZBkI0hWy53FKw99EijxHiX&oh=00_AYC_9lBynQZbqQEnj3ePKEm_txTs5JHz14OfrpBiQhk5Kw&oe=671339F0',
      'https://scontent.fkiv1-1.fna.fbcdn.net/v/t39.30808-6/462397439_2004626296655568_95057407551947131_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4bwd_Tq7e1sQ7kNvgH42wLM&_nc_ht=scontent.fkiv1-1.fna&_nc_gid=APowegO3YWnZXrIkqmDjlNb&oh=00_AYBLeixz45OU76SahglmEmblws8_JetINcFDrB2filVnQw&oe=671364EB',
    ],
  },
  {
    id: 'parcul-central',
    name: 'Parcurile',
    description:
      'Un loc perfect pentru relaxare și plimbări în natură. Parcul din Ișcălău oferă o oază de verdeață în inima satului nostru, cu aleea umbrită, bănci confortabile. Este locul ideal pentru jogging matinal sau pur și simplu pentru a vă bucura de frumusețea naturii.',
    images: [
      'https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHp1RUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f21483af433f1947fcb0cb87b9cd7dabea53b4b0/parck.jpg',
      'https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHZ1RUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4873a79f281b3a0755ccbc2ab48a1c96326ee7c5/parck1.jpg',
    ],
  },
  {
    id: 'muzeul-local',
    name: 'Casa de Cultură',
    description:
      'Casa de cultură din satul Iscalău, împreună cu muzeul inclus, reprezintă inima vie a comunității, un loc unde tradiția, arta și istoria se împletesc armonios. Clădirea, cu o arhitectură modestă dar plină de farmec, adăpostește nu doar evenimente culturale, ci și o comoară neprețuită a memoriei colective a satului: muzeul local.',
    images: [
      'https://images.unsplash.com/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1605972643561-0704429f9170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ],
  },
  {
    id: 'monumente',
    name: 'Monumente',
    description:
      'Monumentul istoric dedicat celor căzuți în Al Doilea Război Mondial din satul Iscalău este un simbol profund al recunoștinței și al respectului față de sacrificiile făcute de eroii care au luptat pentru libertatea și demnitatea țării. Amplasat în mijlocul comunității, acest monument evocă amintiri dureroase, dar și o mare mândrie națională, fiind un loc de adunare pentru cei care doresc să cinstească memoria celor căzuți.',
    images: [
      'https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeEh1RUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4da0ef52b3a4d4ff89ad8c473ad2abc35d28dac0/photo_2024-10-15_00-02-03.jpg',
      'https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeEx1RUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1163ce48490197ab38605618ae56d80c5ce0a7ba/monument1.jpg',
    ],
  },
  {
    id: 'povesti-si-legende',
    name: 'Povești și Legende',
    description:
      'Descoperă folclorul local și legendele fascinante ale comunei Iscalau. Aceste narațiuni transmise din generație în generație sunt o parte esențială a patrimoniului nostru cultural imaterial. Ele reflectă credințele, valorile și imaginația bogată a strămoșilor noștri, oferind o perspectivă unică asupra identității locale.',
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
  },
];

const PlaceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const place = places.find((p) => p.id === id);

  if (!place) {
    return <div>Locul nu a fost găsit.</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">{place.name}</h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
          <div className="relative w-64 h-64 mx-auto transform rotate-45 overflow-hidden">
            <img
              src={place.images[0]}
              alt={place.name}
              className="absolute top-0 left-0 w-[150%] h-[150%] object-cover -rotate-45"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg">{place.description}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 md:ml-8">
          <div className="relative w-48 h-48 mx-auto transform rotate-45 overflow-hidden">
            <img
              src={place.images[1]}
              alt={`${place.name} - detaliu`}
              className="absolute top-0 left-0 w-[150%] h-[150%] object-cover -rotate-45"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg">
            Vă invităm să descoperiți personal farmecul și importanța acestui
            loc pentru comunitatea noastră. Fiecare vizită aduce o nouă
            perspectivă și o apreciere mai profundă a patrimoniului nostru
            local.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
