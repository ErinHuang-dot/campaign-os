import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';
import { URL } from '../constants/FilePath';
import data from '../data/data.json';

export default function Footer() {
  const SectionWrapper = styled.section`
    background-color: var(--bg-color-theme2);
    padding-block: 4rem;
  `

  const ContentWrapper = styled.div`

  ${MEDIA_QUERY_LG} {
    display: flex;
    justify-content: space-between;
  }
  `
  const Subtitle = styled.div`
    font-size: var(--step-2);
    font-weight: 700;
    color: var(--primary-theme1);
    margin-bottom: 1rem;

    span {
      display: inline-block;
      margin-right: 0.5rem;
      padding: .5rem .75rem;
      background: var(--primary-gradient);
      border-radius: 50%;
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      font-weight: 900;
      line-height: 1;
      color: white;
    }
  `
  
  const SocialIconList = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    li:not(:last-of-type) {
      margin-right: 1rem;
    }
    a {
      display: inline-block;
      padding: 0.5rem;
      border-radius: 50%;
      background-color: white;
    }
  `
  const Footnote = styled.span`
    font-size: 0.875rem;
  `
  const ContactWrapper = styled.div`
    margin-top: 1.5rem;

    ${MEDIA_QUERY_LG} {
      margin-top: 0;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  `
  return (
    <SectionWrapper>
      <div className='u-container'>
        <ContentWrapper>
          <div>
            <Subtitle><span>{ data.Intro.no }</span>{ data.Intro.name }</Subtitle>
            <SocialIconList>
              { data.Header.socialIcon.map( (item,i) => {
                return (
                  <li key={i}><a href='#'><img src={ URL + item }/></a></li>
                )
              })}
            </SocialIconList>
            <Footnote>{ data.Footer.footnote }</Footnote>
          </div>
          <ContactWrapper>
            <h4>{ data.Footer.title }</h4>
            <ul>
              <li>{ data.Footer.address }</li>
              <li>{ data.Footer.phone }</li>
              <li>{ data.Footer.email }</li>
            </ul>
          </ContactWrapper>
        </ContentWrapper>
      </div>
    </SectionWrapper>
  )
}