import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../constants/Breakpoint';
import SectionTitle from '../components/SectionTitle';
import PhotoCard from '../components/PhotoCard';
import data from '../data/data.json';

export default function Issues() {

  const PhotoCardList = styled.ul`
    margin-top: 2.5rem;

    ${MEDIA_QUERY_LG} {
      display: flex;
      margin-top: 4rem;     
    } 

    li:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: 4rem;

      ${MEDIA_QUERY_LG} {
        margin-right: 4rem;
        margin-bottom: 0;
      }
    }
  `

  return (
    <section className='sec-p-block' id='issue'>
      <div className='u-container'>
        <div>
          <SectionTitle tag={ data.Policy.tag } title={ data.Policy.title }/>
          <PhotoCardList>
            { data.Policy.issues.map( item => (
              <li key={item.id}>
                <PhotoCard 
                  title1={ item.title1 }
                  title2={ item.title2 }
                  img={ item.img }/>
              </li>
            ))}
          </PhotoCardList>         
        </div>
      </div>
    </section>
  )
}