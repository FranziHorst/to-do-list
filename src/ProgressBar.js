import styled from 'styled-components'

export default styled.div`
  background: linear-gradient(45deg, #0d2843, #2980b9);
  height: ${props => props.height || 8}px;
  margin-bottom: 2px;

  &::after {
    content: '';
    height: ${props => props.height || 8}px;
    display: block;
    width: ${props => props.percentage * 100}%;
    background: #ffcc00;
    transition: width 0.3s ease;
  }
`
