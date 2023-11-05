import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

export default function App() {
  

  return (
    <div className='container'> 
     <Header/>
     <Menu/>
     <Footer/>
     
    </div>
  )
}

function Header(){
  return(
    <header className='header'>
     <h1> Fast React Pizza Co.</h1>
    </header>
  )
} 

function Menu(){
  return(
    <main className='menu'>
    <h2>Our Menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    <Pizza />
    </main>
  )
}

function Footer(){

  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen =  hour >=openHour && hour <=closeHour

  //  isOpen? alert("We're currently Open") : alert("Sorry we're closed")
  return (
     <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently open
      </footer>
  )
}

function Pizza(){
  return(
    <div>
      <img src='pizzas/focaccia.jpg' /> 
      <h3>Pizza Focaccia</h3>
      <p>Tomato, mozarella, spinach and ricotta cheese</p>
    </div>
  )
}