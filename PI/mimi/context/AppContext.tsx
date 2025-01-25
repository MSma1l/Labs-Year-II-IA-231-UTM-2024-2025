import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  uploadedFiles: File[];
  questions: string[];
  proposals: string[];
  addFiles: (files: File[]) => void;
  removeFile: (index: number) => void;
  addQuestion: (question: string) => void;
  addProposal: (proposal: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [proposals, setProposals] = useState<string[]>([]);

  const addFiles = (files: File[]) => {
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const addQuestion = (question: string) => {
    setQuestions(prevQuestions => [...prevQuestions, question]);
  };

  const addProposal = (proposal: string) => {
    setProposals(prevProposals => [...prevProposals, proposal]);
  };

  return (
    <AppContext.Provider value={{
      uploadedFiles,
      questions,
      proposals,
      addFiles,
      removeFile,
      addQuestion,
      addProposal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};