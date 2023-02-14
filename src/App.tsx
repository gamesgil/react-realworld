import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';
import { NotFound } from './components/NotFound';

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
}

export default App
