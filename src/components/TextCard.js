import React from 'react';
import styled from 'styled-components';
import MoreLink from '../components/MoreLink';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../constants/Breakpoint';
import { URL } from '../constants/FilePath';

export default function TextCard({id, title, content, link, img}) {
  const Wrapper = styled.div`
    background-color: ${props => props.id=='plan1'? 'var(--primary-theme1)':'var(--gray-700)'};
    padding: 2.5rem;
    border-radius: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${MEDIA_QUERY_LG} {
      padding: 6rem;      
    }
    
    h3 {
      margin-bottom: 1rem;
      font-family: 'Dela Gothic One', sans-serif;
      font-size: 2.5rem;
      color: white;

      ${MEDIA_QUERY_LG} {
        font-size: 3.25rem;        
      }
    }

    p {
      font-size: 1.25rem; 
      color: white;
    }
  `
  const LinkWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    height: 6.5rem;   

    ${MEDIA_QUERY_LG} {
      height: auto;
    }

    img {
      dispaly: ${ props => props.img?'inline-block':'none'};
      height: 100%;
      margin-left: 2.125rem;

      ${MEDIA_QUERY_LG} {
        margin-left: 3.125rem;
      }
    }
    span {
      flex-shrink: 0;
      font-weight: 700;
    }
  `
  return (
    <Wrapper id={id}>
      <div>
        <h3>{ title }</h3>
        <p>{ content }</p>
      </div>
      <LinkWrapper>   
        <MoreLink>{ link }</MoreLink>    
        { img && <img src={URL + img} alt={title}/>}
      </LinkWrapper>
    </Wrapper>
  )
}