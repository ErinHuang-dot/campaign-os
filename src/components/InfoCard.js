import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../constants/Breakpoint';

export default function InfoCards({title, content, date, img, feature}) {
  const Wrapper = styled.div`
    display: ${props => props.feature?'block':'flex'};
    align-items: flex-start;
  `
  const ImgWrapper = styled.div`
    border-radius: ${props => props.feature?'1rem':'0.5rem'};
    margin-bottom: ${props => props.feature?'1rem':'0'};
    margin-right: ${props => props.feature?'0':'1rem'};
    flex: ${props => props.feature?'initial':'1 0 16%'};
    height: ${props => props.feature?'15rem':'initial'};
    overflow: hidden;

    ${MEDIA_QUERY_MD} {
      height: ${props => props.feature?'25.75rem':'initial'};      
    }
    ${MEDIA_QUERY_LG} {
      flex: ${props => props.feature?'initial':'1 0 32%'};
    }

    img {
      height: auto;
      object-fit: cover;
    }
  `
  const ContentWrapper = styled.div`
    span {
      display: block;
      color: var(--gray-500);
    }

    h4 {
      margin-block: 0.5rem;
      font-size: ${props => props.feature?'1.25rem':'initial'};
    }
  `
  
  return (
    <>
      <ImgWrapper feature={ feature }>
        <img src={ img } alt={ title }/>
      </ImgWrapper>
      <ContentWrapper feature={ feature }>
        <span>{ date }</span>
        <h4 feature={ feature }>{ title }</h4>
        <p>{ content }</p>
      </ContentWrapper>
    </>
  )
}