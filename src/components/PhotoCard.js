import React from 'react';
import styled from 'styled-components';
import { URL } from '../constants/FilePath';

export default function PhotoCard({ title1, title2, img }) {
  const PhotoCardWrapper = styled.div`
    h4 {
      font-size: 1.5rem;
    }
    img {
      margin-top: 1rem;
      border-radius: 1.5rem;
    }
  `
  return (
    <PhotoCardWrapper>
      <h4>{ title1 }</h4>
      <h4>{ title2 }</h4>
      <img src={ URL + img } alt={title1}/>
    </PhotoCardWrapper>
  )
}