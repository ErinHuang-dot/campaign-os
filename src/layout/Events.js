import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/Breakpoint';
import SectionTitle from '../components/SectionTitle';
import InfoCards from '../components/InfoCard';
import MoreLink from '../components/MoreLink';
import data from '../data/data.json';


export default function Events() {
  const Section = styled.section`
    padding-block: 4rem;

    ${MEDIA_QUERY_LG} {
      padding-block: 6.5rem;
    }
  `
  const ContentWrapper = styled.div`
    margin-top: 2.5rem;

    ${MEDIA_QUERY_LG} {
      display: flex;
      margin-top: 4rem;     
    }  
  `
  const FeaturePost = styled.div`
    flex: 1 1 50%;
  `
  const Posts = styled.div`  
    margin-top: 1.5rem;
    flex: 1 1 50%;

    ${MEDIA_QUERY_LG} {
      margin-top: 0;
      margin-left: 1.5rem;
    }
    ul {
      margin-bottom: 1.5rem;
    }

    li {
      display: flex;
      height: 6.25rem;

      ${MEDIA_QUERY_LG} {
        height: 8.375rem;
      }
    }

    li:not(:last-of-type) {
      margin-bottom: 1.5rem
    }
  `


  return (
    <Section>
      <div className='u-container'>
        <div>
          <SectionTitle tag={ data.Events.tag } title={ data.Events.title }/>
          <ContentWrapper>
            <FeaturePost>
              <InfoCards
                title={ data.Events.feature.title }
                content={ data.Events.feature.content}
                date={ data.Events.feature.date}
                img={ data.Events.feature.img}
                feature />
            </FeaturePost>
            <Posts>
              <ul>
              { data.Events.posts.map((item)=>
                   (
                    <li>
                      <InfoCards 
                      key={item.id}
                      title={ item.title }
                      content={ item.content}
                      date={ item.date}
                      img={ item.img}
                       />
                    </li>
                  ) 
                )}
              </ul>
              <MoreLink>查看更多</MoreLink>
            </Posts>  
          </ContentWrapper>         
        </div>
      </div>
    </Section>
  )
}