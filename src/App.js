import React, { useState } from 'react';
import MainView from './components/MainView';
import styled from 'styled-components'
import './App.css';
import Settings from './components/Settings';
import Container from './components/Container';
import Items from './components/Items';
import Input from './components/Input';

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

const Label = styled.label`
  float:left;
  width:170px;
  margin:4px;
  background-color:#EFEFEF;
  border-radius:4px;
  border:1px solid #D0D0D0;
  overflow:auto;
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
  font-size: 14px;
  padding:5px 0px;
  display:block;

  ${RadioButton}:checked + & {
    background-color:#404040;
    color:#F7F7F7;
  }
`

function App() {
  const [items, setItems] = useState([1, 2])
  const [value, setValue] = useState(items.length)
  const [selectedDirection, setSelectedDirection] = useState('row')  
  const [selectedWrap, setSelectedWrap] = useState('wrap')
  const [selectedJustify, setSelectedJustify] = useState('flex-start')
  const [selectedAlignItems, setSelectedAlignItems] = useState('stretch')
  const [selectedAlignContent, setSelectedAlignContent] = useState('stretch')
  
  const setTheNumber = (e) => {
    e.preventDefault()
    const y = Array.from({length: value}, (v, i) => i + 1)
    setItems(y)
  }

  const setDirection = (e) => {
    e.preventDefault()
  }

  return (
    <HomePage>
      <MainView>
        <Container direction={selectedDirection} 
                   wrap={selectedWrap} 
                   justify={selectedJustify}
                   alignItems={selectedAlignItems}
                   alignContent={selectedAlignContent}>
          { items.map((a, i) => {
            return <Items key={i}>item {a}</Items>
          })}
        </Container>
      </MainView>
      <Settings>

        <form onSubmit={(e) => setTheNumber(e)}>
          <label>Items: </label>
          <Input type={'number'} value={value} onChange={e => setValue(e.target.value)}></Input>
          <button type={'submit'}>submit</button>
        </form>

        <div>
          <p>Direction: </p>
          <Label><RadioButton type={'radio'} value={'row'} onChange={() => setSelectedDirection('row')} checked={selectedDirection === 'row'}/><Span>Row</Span></Label>
          <Label><RadioButton type={'radio'} value={'row-reverse'} onChange={() => setSelectedDirection('row-reverse')} checked={selectedDirection === 'row-reverse'}/><Span>Row-reverse</Span></Label>
          <Label><RadioButton type={'radio'} value={'column'}  onChange={() => setSelectedDirection('column')} checked={selectedDirection === 'column'}/><Span>Column</Span></Label>
          <Label><RadioButton type={'radio'} value={'column-reverse'} onChange={() => setSelectedDirection('column-reverse')} checked={selectedDirection === 'column-reverse'}/><Span>Column-reverse</Span></Label>
        </div>

        <div>
          <p>Flex-wrap: </p>
          <Label><RadioButton type={'radio'} value={'wrap'} onChange={() => setSelectedWrap('wrap')} checked={selectedWrap === 'wrap'}/><Span>Wrap</Span></Label>
          <Label><RadioButton type={'radio'} value={'no-wrap'} onChange={() => setSelectedWrap('no-wrap')} checked={selectedWrap === 'no-wrap'}/><Span>No-wrap</Span></Label>
          <Label><RadioButton type={'radio'} value={'wrap-reverse'}  onChange={() => setSelectedWrap('wrap-reverse')} checked={selectedWrap === 'wrap-reverse'}/><Span>Wrap-reverse</Span></Label>
        </div>

        <div>
          <p>Justify-content: </p>
          <Label><RadioButton type={'radio'} value={'flex-start'} onChange={() => setSelectedJustify('flex-start')} checked={selectedJustify === 'flex-start'}/><Span>Flex-start</Span></Label>
          <Label><RadioButton type={'radio'} value={'flex-end'} onChange={() => setSelectedJustify('flex-end')} checked={selectedJustify === 'flex-end'}/><Span>Flex-end</Span></Label>
          <Label><RadioButton type={'radio'} value={'center'}  onChange={() => setSelectedJustify('center')} checked={selectedJustify === 'center'}/><Span>Center</Span></Label>
          <Label><RadioButton type={'radio'} value={'space-between'}  onChange={() => setSelectedJustify('space-between')} checked={selectedJustify === 'space-between'}/><Span>Space-between</Span></Label>
          <Label><RadioButton type={'radio'} value={'space-around'}  onChange={() => setSelectedJustify('space-around')} checked={selectedJustify === 'space-around'}/><Span>Space-around</Span></Label>
          <Label><RadioButton type={'radio'} value={'space-evenly'}  onChange={() => setSelectedJustify('space-evenly')} checked={selectedJustify === 'space-evenly'}/><Span>Space-evenly</Span></Label>
        </div>

        <div>
          <p>Align-items: </p>
          <Label><RadioButton type={'radio'} value={'stretch'} onChange={() => setSelectedAlignItems('stretch')} checked={selectedAlignItems === 'stretch'}/><Span>Stretch</Span></Label>
          <Label><RadioButton type={'radio'} value={'flex-start'} onChange={() => setSelectedAlignItems('flex-start')} checked={selectedAlignItems === 'flex-start'}/><Span>Flex-start</Span></Label>
          <Label><RadioButton type={'radio'} value={'flex-end'}  onChange={() => setSelectedAlignItems('flex-end')} checked={selectedAlignItems === 'flex-end'}/><Span>Flex-end</Span></Label>
          <Label><RadioButton type={'radio'} value={'center'}  onChange={() => setSelectedAlignItems('center')} checked={selectedAlignItems === 'center'}/><Span>Center</Span></Label>
          <Label><RadioButton type={'radio'} value={'baseline'}  onChange={() => setSelectedAlignItems('baseline')} checked={selectedAlignItems === 'baseline'}/><Span>Baseline</Span></Label>
        </div>

        <div>
          <p>Align-content: </p>
          <Label><RadioButton type={'radio'} value={'stretch'} onChange={() => setSelectedAlignContent('stretch')} checked={selectedAlignContent === 'stretch'}/><Span>Stretch</Span></Label>
          <Label><RadioButton type={'radio'} value={'flex-start'} onChange={() => setSelectedAlignContent('flex-start')} checked={selectedAlignContent === 'flex-start'}/><Span>Flex-start</Span></Label>
          <Label><RadioButton type={'radio'} value={'flex-end'}  onChange={() => setSelectedAlignContent('flex-end')} checked={selectedAlignContent === 'flex-end'}/><Span>Flex-end</Span></Label>
          <Label><RadioButton type={'radio'} value={'center'}  onChange={() => setSelectedAlignContent('center')} checked={selectedAlignContent === 'center'}/><Span>Center</Span></Label>
          <Label><RadioButton type={'radio'} value={'space-around'}  onChange={() => setSelectedAlignContent('space-around')} checked={selectedAlignContent === 'space-around'}/><Span>Space-around</Span></Label>
          <Label><RadioButton type={'radio'} value={'space-between'}  onChange={() => setSelectedAlignContent('space-between')} checked={selectedAlignContent === 'space-between'}/><Span>Space-between</Span></Label>
        </div>

      </Settings>
    </HomePage>
  );
}

export default App;
