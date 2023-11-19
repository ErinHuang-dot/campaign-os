import Header from './layout/Header';
import Hero from './layout/Hero';
import Advocate from './layout/Advocate';
import Events from './layout/Events';
import TabNav from './components/TabNav';
import styled from 'styled-components';
import './App.css';

function App() {
  const SectionWrapper = styled.section`
    height: 100%;
  `
  return (
    <>
      <SectionWrapper>
        <Header />
        <Hero /> 
      </SectionWrapper>   
      <Advocate />
      <Events />
      <TabNav />    
      <div className='u-container'>
        
      </div>
    </>
  );
}

export default App;
