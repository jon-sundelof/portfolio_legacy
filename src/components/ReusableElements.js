import styled from 'styled-components'

export const SectionWrapper = styled.div`
  height: ${props => props.height};
`

export const SectionHeader = styled.h1`
  color: ${props => props.color};
  font-size: 4rem;
  text-align: center;
`

export const ColorSpan = styled.span.attrs(props => ({
  color: props.color,
  font: props.font
}))`
  color: ${props => props.color};
  font-size: ${props => props.font};
`