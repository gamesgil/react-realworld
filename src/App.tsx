import { useContext, useState } from 'react'
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
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import { UserContext } from './contexts/User.ctx';

function App() {
  const user = useContext(UserContext);
  
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login name={user.name} password={user.password} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
}

export default App
