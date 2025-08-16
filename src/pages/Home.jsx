import React from 'react';
import BrandGrid from '../components/BrandGrid';
import Hero from "../components/Hero";
import Features from '../components/Features';
import Browse from '../components/Browse';
import Footer from '../layout/Footer';


export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <BrandGrid />
        <Features />
        <Browse />
      </main>
 
    </>
  );
}
