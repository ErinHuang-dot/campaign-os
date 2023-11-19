import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import data from '../data/data.json';
import { URL } from '../constants/FilePath';

export default function Header() {
  const Wrapper = styled.div`
    max-width: 120rem;
    padding: var(--space-m) var(--space-s);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, .9);
    position: sticky;
    top: 0;
    z-index: 50;
  `
  const LogoWrapper = styled.div`
    display: flex;

    h1 {
      color: var(--primary-theme1);
    }
    img {
      margin-right: 4px;
    }
  `

  const SocialIconList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;

    li:not(:last-of-type) {
      margin-right: 16px;
    }
  `

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={URL + data.Header.logo.img} />
        <h1>{data.Header.logo.title}</h1>
      </LogoWrapper>
      <Nav />
      <SocialIconList>
        { data.Header.socialIcon.map( (item,i) => {
          return (
            <li key={i}><a href='#'><img src={ URL + item }/></a></li>
          )
        })}
      </SocialIconList>

    </Wrapper>
  )
}