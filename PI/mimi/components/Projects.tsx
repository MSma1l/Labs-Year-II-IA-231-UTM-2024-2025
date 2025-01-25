import React, { useState } from 'react';
import { Upload, File } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  file?: File;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({ name: '', description: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProject({ ...newProject, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.name && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ name: '', description: '' });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6">Proiecte Comuna Iscalau</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nume Proiect</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descriere</label>
          <textarea
            id="description"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Încarcă Fișier (opțional)</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Încarcă un fișier</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} />
                </label>
                <p className="pl-1">sau trage și plasează</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, PDF până la 10MB</p>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Adaugă Proiect
        </button>
      </form>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Proiecte Curente</h3>
        {projects.length === 0 ? (
          <p>Nu există proiecte încărcate momentan.</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="border-b pb-4">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-600">{project.description}</p>
                {project.file && (
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <File className="mr-2" size={16} />
                    <span>{project.file.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projects;