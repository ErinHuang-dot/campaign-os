import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';
import { URL } from '../constants/FilePath';

export default function Nav() {
  const NavList = styled.ul`
    display: none;

    ${MEDIA_QUERY_LG} {
      display: flex;
      align-items: center;
      font-size: var(--step-0);
  
      li:not(:last-of-type) {
        margin-right: 32px;
      }
    }
    a {
      padding-block: 0.5rem;
    }
  `

  return (
    <NavList>
    { data.Header.navList.map( (item) => {
      return (
        <li key={ item.id }>
          <a href={URL + `/#${item.id}`}>{ item.title }</a>
        </li>
      )
    })}
    </NavList>
  )
}