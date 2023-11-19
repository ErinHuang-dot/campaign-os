import React from 'react';
import styled from 'styled-components';

export default function MoreLink({children}) {
  const LinkWrapper = styled.span`
    display: inline-block;

    a {
      font-wight: 700;
      padding: 1.375rem 1.5rem;
      border-radius: 31.25rem;
      background-color: var(--gray-100);
      display: flex;
      
      span {
        margin-left: 0.5rem;
        transition: all 0.2s ease-in-out;
      }
    }
    a:hover span{
      transform: translateX(0.5rem);

    }
  `
  return (
    <LinkWrapper>
      <a href='#' title='前往更多活動'>查看更多
        <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </LinkWrapper>
  )
}