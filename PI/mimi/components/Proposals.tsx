import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Proposals: React.FC = () => {
  const [newProposal, setNewProposal] = useState('');
  const { proposals, addProposal } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProposal.trim()) {
      addProposal(newProposal.trim());
      setNewProposal('');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Propuneri</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newProposal}
          onChange={(e) => setNewProposal(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Scrieți propunerea dvs. aici..."
          rows={3}
        ></textarea>
        <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Trimiteți Propunerea
        </button>
      </form>
      <div>
        {proposals.map((proposal, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-2">
            <p>{proposal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposals;