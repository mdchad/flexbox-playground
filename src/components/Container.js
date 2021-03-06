import styled from 'styled-components'

const Container = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 10px 10px 25px 0px rgba(148,148,148,1);
  margin: 50px 0;
  display: flex;
  min-height: 500px;
  /* width: 900px; */
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`

export default Container