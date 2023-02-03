import React, { useState , useEffect } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import NapaHome from './Components/NapaHome'
import TahoeHome from './Components/TahoeHome'
import { Routes, Route } from "react-router-dom";
import BookingCalendar from "./Components/BookingCalendar";
import Blog from "./Components/Blog"
import SignIn from "./Components/SignIn"
import Contact from "./Components/Contact"
import SignInCreatePage from './Components/SignInCreatePage';
import Reservation from './Components/Reservation';


function App() {
  const [user, setUser] = useState("")
    

  useEffect(()=> {
    fetch('/me')
    .then(r => r.json())
    .then(data => {
      if(data.error) {
        setUser(null)
      } else {
      setUser(data)
      }
    } )
  }, [])

  return (

<div className="App">
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/napa" element={<NapaHome/>} />
    <Route path="/napa" element={<NapaHome/>} />
    <Route path="/tahoe" element={<TahoeHome/>} />
    <Route path="/reserve" element={<Reservation/>} />
    <Route path="/calendar" element={<BookingCalendar/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/signin" element={<SignInCreatePage user={user} setUser={setUser}/>} />
  </Routes>
</div>
  )
}

export default App;
