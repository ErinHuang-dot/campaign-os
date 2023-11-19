import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';

export default function TabNav() {
  const TabNavList = styled.ul`
    list-style: none;
    background-color: rgba(255, 255, 255, .9);
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-around;

    li {
      text-align: center;
      padding: 0.75rem 1rem;
    }
    img {
      display: inline-block;
    }
    p {
      font-size: 0.875rem;
    }

    ${ MEDIA_QUERY_LG } {
      display: none;
    }
`
  return (
    <TabNavList>
      { data.tabNavList.map( (item, i) => {
        return (
          <li key={i}>
            <a href={`#${item.id}`} title={item.id} target=''>
              <img src={ item.img }/>
              <p>{ item.title }</p>
            </a>
          </li>
        )
      })}
      
    </TabNavList>
  )
}