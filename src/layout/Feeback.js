import React from 'react';
import styled from 'styled-components';
import TextCard from '../components/TextCard';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../constants/Breakpoint';
import data from '../data/data.json';

export default function Feedback() {
  const CardList = styled.ul`
    margin-bottom: 4rem;

  ${MEDIA_QUERY_MD} {
    display: flex;
    align-content; stretch;

    li {
      flex: 1 1 50%;
      height: 19.25rem;
      
      ${MEDIA_QUERY_LG} {
        height: 37rem;        
      }
    }
  }
  ${MEDIA_QUERY_LG} {
    margin-bottom: 6.5rem;
  }

  li:not(:last-of-type) {
    margin-bottom: 1.5rem;

    ${MEDIA_QUERY_MD} {
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  }
  `
  const Title = styled.div`
    font-family: 'Dela Gothic One', sans-serif;
    font-size: 3.25rem;
    background-image: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1.5rem;

    h2 {
      margin-right: 0;
      line-height: 1.2;
    }

    ${MEDIA_QUERY_LG} {
      font-size: 4rem;

      h2:first-of-type {
        margin-right: 2rem;
      }
    }
  `
  const Subtitle = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-theme1);

    ${MEDIA_QUERY_LG} {
      font-size: 2.5rem;      
    }

    span {
      display: inline-block;
      margin-inline: 1rem;
      padding: .5rem .85rem;
      background: var(--primary-gradient);
      border-radius: 50%;
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      font-size: var(--step-3);
      line-height: 1;
      color: white;
    }
  `
  return (
    <section className='sec-p-block' id='feedback'>
      <div className='u-container'>
        <CardList>
          { data.Feedback.map(item => (
            <li>
              <TextCard
                id={ item.id}
                title={ item.title} 
                content={ item.content} 
                link={ item.link}
                img={ item.img}/>
            </li>
          ))}
        </CardList>
        <div>
          <Title>
            <h2>{ data.Intro.title1 }</h2>
            <h2>{ data.Intro.title2 }</h2>
          </Title>
          <Subtitle>
            <p><span>{ data.Intro.no }</span>{ data.Intro.name }</p>
          </Subtitle>
        </div>
      </div>
    </section>
  )
}