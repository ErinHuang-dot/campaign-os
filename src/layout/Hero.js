import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';
import data from '../data/data.json';

export default function Hero() {
  const Wrapper = styled.div`
    padding-top: var(--space-3xl);
  `
  const Title = styled.div`
    font-family: 'Dela Gothic One', sans-serif;
    font-size: var(--step-7);
    background-image: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${MEDIA_QUERY_LG} {
      h2 {
        margin-right: 2rem;
      }
    }
  `
  const Subtitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: var(--step-4);
    font-weight: 700;
    color: var(--primary-theme1);

    p:first-of-type {
      padding: var(--space-xs) var(--space-s);
      background-color: var(--gray-700);
      border-radius: 1rem;
      font-size: var(--step-2);
      font-weight: 700;
      color: white;
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
  const ImgWrapper = styled.div`
    text-align: center;
    padding-top: 10rem;
    position: relative;

    img {
      margin: auto;
    }
    img:first-of-type {
      max-width: 26.25rem;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
  `
  const SloganWrapper = styled.div`
    white-space: nowrap;
    overflow: hidden;
    background-color: var(--primary-theme1);
    color: white;
    font-family: 'Dela Gothic One', sans-serif;
    font-size: var(--step-6);
    p {
      display: inline-block;
      margin-right: var(--space-l);
    }
  `
  const URL = process.env.PUBLIC_URL;
  return (
    <Wrapper>
      <Title>
        <h2>{ data.Intro.title1 }</h2>
        <h2>{ data.Intro.title2 }</h2>
      </Title>
      <Subtitle>
        <p>{ data.Intro.tag }</p>
        <p><span>{ data.Intro.no }</span>{ data.Intro.name }</p>
      </Subtitle>
      <ImgWrapper>
        <img src={ URL + data.Intro.img1 } />
        <img src={ URL + data.Intro.img2 }/>
      </ImgWrapper>
      <SloganWrapper>
        { data.Intro.slogan.map((item,i) => {
          return (
            <p key={i}>{item}</p>
          )
        })}
      </SloganWrapper>
    </Wrapper>
  )
}