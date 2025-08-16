import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import '../styles/guitar_selection.css';
import SelectGuitar from '../components/SelectGuitar';
import BrandInfo from '../components/BrandInfo';
import Footer from '../layout/Footer';




export default function GuitarSelection() {
  return (
    <>

      <main>
        <BrandInfo />
        <SelectGuitar />
        
      </main>
      <Footer />
    </>
  );
}