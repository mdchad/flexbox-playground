import styled from 'styled-components'

const Settings = styled.div`
    background-color: #f5f5f5;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    /* padding-left: 20px; */
`

const Label = styled.label`
  float:left;
  width:100px;
  margin:4px 0;
  background-color: white;
  overflow:auto;
  cursor: pointer;
`

const RadioButton = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  position:absolute;
  top:-20px;
`


const Span = styled.span`
  text-align:center;
  font-size: 11px;
  padding:8px 0px;
  display:block;

  ${RadioButton}:checked + & {
    background-color:#8d70c8;
    color:#F7F7F7;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  /* width: 380px; */
  flex-wrap: wrap;
  justify-content: center;
`

const P = styled.p`
  text-align: center;
  margin-top: 2.2em;
  font-size: 14px;
`

export { Settings, Label, ButtonWrap, Span, P, RadioButton };