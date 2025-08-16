import React from 'react';
import BrandGrid from '../components/BrandGrid';
import Hero from "../components/Hero";
import Features from '../components/Features';
import Browse from '../components/Browse';



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
