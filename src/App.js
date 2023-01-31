import React from 'react'
import './App.css';
import Header from './componentes/header/header'
import Footer from './componentes/footerCorreo/footer'
import Section_um from './componentes/section_um/section_um'
import Section_dois from './componentes/section_dois/Section_dois'
import Sectiontres from './componentes/section_tres/section_tres'



function App() {
  return (
    <div className="App">
        <Header />
        {/* <hr></hr> */}
        <Section_um />
        {/* <hr></hr> */}
        <Section_dois />
        {/* <hr></hr> */}
        <Sectiontres />
        {/* <hr></hr> */}
        <Footer />
    </div>
  );
}


export default App;
