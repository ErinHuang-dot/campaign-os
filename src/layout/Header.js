import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import data from '../data/data.json';

export default function Header() {
  const Wrapper = styled.div`
    max-width: 120rem;
    padding: var(--space-m) var(--space-s);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  const URL = process.env.PUBLIC_URL;
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
            <li key={i}><a><img src={ URL + item }/></a></li>
          )
        })}
      </SocialIconList>

    </Wrapper>
  )
}