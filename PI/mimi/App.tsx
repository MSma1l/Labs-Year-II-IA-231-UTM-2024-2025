import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import FullImageGallery from './components/FullImageGallery';
import Questions from './components/Questions';
import Proposals from './components/Proposals';
import Mayor from './components/Mayor';
import Council from './components/Council';
import Economy from './components/Economy';
import Projects from './components/Projects';
import Libraries from './components/Libraries';
import PlacesToVisit from './components/PlacesToVisit';
import PlaceDetails from './components/PlaceDetails';
import Calendar1 from './components/Calendar1';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={
                <>
                  <h1 className="text-4xl font-bold mb-8 text-center text-primary">Bine ați venit în Comuna Iscalau</h1>
                  <ImageGallery />
                  <MainContent />
                  <Questions />
                  <Proposals />
                </>
              } />
              <Route path="/primar" element={<Mayor />} />
              <Route path="/consiliu" element={<Council />} />
              <Route path="/economie" element={<Economy />} />
              <Route path="/proiecte" element={<Projects />} />
              <Route path="/biblioteci" element={<Libraries />} />
              <Route path="/locuri-de-vizitat" element={<PlacesToVisit />} />
              <Route path="/locuri-de-vizitat/:id" element={<PlaceDetails />} />
              <Route path="/calendar" element={<Calendar1 />} />
              <Route path="/galerie" element={<FullImageGallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;