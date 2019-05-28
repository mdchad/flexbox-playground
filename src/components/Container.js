import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid grey;
  margin: 10em auto;
  display: flex;
  height: auto;
  width: 900px;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify}
`

export default Container