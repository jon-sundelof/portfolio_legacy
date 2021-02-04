import styled from 'styled-components'

export const SectionWrapper = styled.div`
  height: 100vh;
`

export const ColorSpan = styled.span.attrs(props => ({
  color: props.color,
  font: props.font
}))`
  color: ${props => props.color};
  font-size: ${props => props.font};
`