import React from 'react';

const councilMembers = [
  { name: 'Maria Ionescu', role: 'Viceprimar' },
  { name: 'Gheorghe Stancu', role: 'Consilier' },
  { name: 'Elena Dumitrescu', role: 'Consilier' },
  { name: 'Vasile Marin', role: 'Consilier' },
  { name: 'Ana Popa', role: 'Consilier' },
  { name: 'Constantin Radu', role: 'Consilier' },
  { name: 'Ioana Nistor', role: 'Consilier' },
];

const Council = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">Consiliul Local Iscalau</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {councilMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Council;