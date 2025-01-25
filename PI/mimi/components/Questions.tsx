import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Questions: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const { questions, addQuestion } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      addQuestion(newQuestion.trim());
      setNewQuestion('');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Întrebări</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Scrieți întrebarea dvs. aici..."
          rows={3}
        ></textarea>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Publicați Întrebarea
        </button>
      </form>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-2">
            <p>{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;