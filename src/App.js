import Header from './layout/Header';
import Hero from './layout/Hero';
import Advocate from './layout/Advocate';
import Events from './layout/Events';
import Issues from './layout/Issues';
import Feedback from './layout/Feeback';
import Footer from './layout/Footer';
import TabNav from './components/TabNav';
import styled from 'styled-components';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Hero />  
      <Advocate />
      <Events />
      <Issues />
      <Feedback />
      <Footer />
      <TabNav />    
      <div className='u-container'>
        
      </div>
    </>
  );
}

export default App;
