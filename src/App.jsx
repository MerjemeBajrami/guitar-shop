import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GuitarSelection from './pages/GuitarSelection';
import GuitarDetails from './pages/GuitarDetails';
import { ErrorBoundary } from './components/ErrorBoundary';



export default function App() {
  return (
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
        {/* Add more routes later like /products, /contact, etc. */}
        <Route path="/brand/:brandId/model/:modelId" element={<GuitarDetails />} />
        <Route path="/brand/:brandId" element={<GuitarSelection />} />
        


      </Routes>
    </Router>
  );
}
