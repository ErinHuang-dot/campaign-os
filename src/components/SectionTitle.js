import React from 'react';
import styled from 'styled-components';

export default function SectionTitle({tag, title}) {
  const SectionTitleWrapper = styled.div`
    text-align: center;
  `
  
  const Tag = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    
    span {
      display: inline-block;
      color: white;
      padding: 0.5em 0.75em;
      background-color: var(--gray-700);
      border-radius: 0.5rem;
    }
  `
  const Title =  styled.h3`
    font-family: 'Dela Gothic One', sans-serif;
    font-size: var(--step-6);
    background-image: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `
  return (
    <SectionTitleWrapper>
      <Tag><span>{ tag }</span></Tag>
      <Title>{ title }</Title>
    </SectionTitleWrapper>
  )
}