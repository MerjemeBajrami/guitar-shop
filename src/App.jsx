import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GuitarSelection from './pages/GuitarSelection';
import GuitarDetails from './pages/GuitarDetails';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider } from './context/Languagecontext'; // <-- import
import Footer from './layout/Footer'; // <-- import

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/guitars/:brandId"
            element={
              <ErrorBoundary>
                <GuitarSelection />
              </ErrorBoundary>
            }
          />
          <Route path="/brand/:brandId/model/:modelId" element={<GuitarDetails />} />
          <Route path="/brand/:brandId" element={<GuitarSelection />} />
        </Routes>
        {/* Footer outside of Routes so it shows on every page */}
        <Footer />
      </Router>
    </LanguageProvider>
  );
}
