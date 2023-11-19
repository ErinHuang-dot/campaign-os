import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';
import { URL } from '../constants/FilePath';
import SectionTitle from '../components/SectionTitle';
import data from '../data/data.json';

export default function Advocate() {
  const Section = styled.section`
    padding-block: var(--space-3xl);
    background-color: var(--bg-color-theme2);  
  `
  const Wrapper = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  `
  const TextWrapper = styled.div`
    padding: 2.5rem 1.5rem; 
    background-color: white; 

    h4 {
      margin-block: 2rem;
      font-size: 1.5rem;

      span {
        color: var(--primary-theme1);
      }
    }

    ${ MEDIA_QUERY_LG } {
      width: 50%;
      padding: 4rem;  
    }
  `
  const ImgWrapper = styled.div`    
    
    img {
      height: 100%;
      object-fit: cover;
    }

    ${ MEDIA_QUERY_LG } {
      width: 50%;
    }
  `

  return (
    <Section id='advocate'>
      <div className='u-container'>
        <Wrapper>
          <TextWrapper>
            <SectionTitle tag={ data.Advocate.tag } title={ data.Advocate.title }/>
            <h4>我堅信 ! 藉由推動更完善的<span>貓咪福利</span>和相關政策，更是間接地投資於<span>台灣的未來</span>。</h4>
            <p>{ data.Advocate.content1 }</p>
            <p>{ data.Advocate.content2 }</p>
          </TextWrapper>
          <ImgWrapper>
            <img src={ URL + data.Advocate.img } alt={ data.Advocate.title }/>
          </ImgWrapper>
        </Wrapper>       
      </div>
    </Section>
  )
}