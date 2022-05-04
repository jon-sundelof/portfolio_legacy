import styled from 'styled-components';

export const SectionWrapper = styled.div`
  height: ${(props) => props.height};
  /*   overflow: hidden; */
`;

export const SectionHeader = styled.h1`
  color: ${(props) => props.color};
  font-size: 4rem;
  text-align: center;
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const ColorSpan = styled.span.attrs((props) => ({
  color: props.color,
  font: props.font,
}))`
  color: ${(props) => props.color};
  font-size: ${(props) => props.font};
`;
