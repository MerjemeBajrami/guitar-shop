import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import GuitarOverview from '../components/GuitarOverview';
import GuitarSpecification from '../components/GuitarSpecification';
import Footer from '../layout/Footer';




export default function GuitarSelection() {
  return (
    <>

      <main>
        <GuitarOverview />
        <GuitarSpecification />
        
      </main>
      <Footer />
    </>
  );
}