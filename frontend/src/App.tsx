// import { useState } from 'react'
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Index from "./pages/home";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}>
          <Route index element={<Header/> }/>
          <Route path='signup' element={<SignUpPage/>}/>
          <Route path="*" element={<div>Error to be added with a component</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
