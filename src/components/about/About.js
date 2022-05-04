import React from 'react';
import {
  TextContent,
  ContentConatiner,
  AboutImg,
  TextSpan,
  AnimatedScroll,
  ScrollBtnCon,
  ScrollText,
  FlexRow,
  BoldSpan,
} from './AboutElements';
import { SectionWrapper, ColorSpan } from '../ReusableElements';

import Jon from '../../img/nob-bw.png';

const About = () => {
  return (
    <>
      <SectionWrapper height='100vh' id='about-wrapper'>
        <ContentConatiner>
          <FlexRow>
            <TextContent>
              As previosly said. I am <BoldSpan> Jon</BoldSpan>. I am a future
              Front-End <BoldSpan>Developer</BoldSpan> who is currently studying
              at KYH in Stockholm. All my life I have had a huge
              <BoldSpan> interesst</BoldSpan> for games,
              <BoldSpan> software</BoldSpan> and all kind of tech. This
              <BoldSpan> interesst</BoldSpan> is accompanied with a
              <BoldSpan> love</BoldSpan> and fascination for
              <BoldSpan> art</BoldSpan> and <BoldSpan> design</BoldSpan> in all
              shapes and forms. Therefore the career choice to become a
              Front-End Developer felt like the obvious decison.
              <BoldSpan>Today</BoldSpan> I can't imagine a better alternative
              since i'm <BoldSpan>loving</BoldSpan> every secound of my
              <BoldSpan> work</BoldSpan>
              <BoldSpan></BoldSpan>
              <ColorSpan color='var(--third-color)'>.</ColorSpan>
            </TextContent>
          </FlexRow>
          <ScrollBtnCon to='projects-wrapper' smooth={true} spy={true}>
            <ScrollText>Projects</ScrollText>
            <AnimatedScroll to='projects-wrapper' smooth={true} spy={true} />
          </ScrollBtnCon>
        </ContentConatiner>
      </SectionWrapper>
    </>
  );
};

export default About;
