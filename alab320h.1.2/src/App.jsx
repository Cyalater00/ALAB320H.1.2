// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";



function App() {
  return (
    <>
    <main>
      <Header />
      <Nav />
      <Article1 />
      <Article2 />
      <Footer />
    </main>
    </>
  );
}

export default App;
