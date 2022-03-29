import React from 'react'
import Carrousel from './Common/Components/Carrousel';
import Products from './Common/Components/Products';
import Slider from './Common/Components/Slider';
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Carrousel/>
      <Slider/>
      <Products/>
    </MainLayout>
  );
}

export default App;
