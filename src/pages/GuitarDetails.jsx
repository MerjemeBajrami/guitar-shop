import React, { useState } from 'react';
import GuitarOverview from '../components/GuitarOverview';
import GuitarSpecification from '../components/GuitarSpecification';





export default function GuitarSelection() {
  return (
    <>

      <main>
        <GuitarOverview />
        <GuitarSpecification />
        
      </main>
   
    </>
  );
}