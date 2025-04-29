import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from "./assets/componenetes/Cadastro";
import Fornecedor from "./assets/componenetes/Fornecedor";
import Pedido from "./assets/componenetes/Pedido"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Cadastro />} />

        
        <Route path="/fornecedor" element={<Fornecedor />} />

        
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;