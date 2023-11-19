import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';

export default function Nav() {
  const NavList = styled.ul`
    display: none;

    ${MEDIA_QUERY_LG} {
      list-style: none;
      background-color: rgba(255, 255, 255, .9);
      position: sticky;
      bottom: 0;
      display: flex;
      align-items: center;
      font-size: var(--step-0);
  
      li:not(:last-of-type) {
        margin-right: 32px;
      }
    }
  `

  return (
    <NavList>
    { data.Header.navList.map( (item, i) => {
      return (
        <li key={i}>{ item }</li>
      )
    })}
    </NavList>
  )
}