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

const Header = styled.p`
  text-align: center;
  color: #e8e8e8;
`

function App() {
  const [items, setItems] = useState([1, 2])
  const [value, setValue] = useState(items.length)
  const [selectedDirection, setSelectedDirection] = useState('row')  
  const [selectedWrap, setSelectedWrap] = useState('wrap')
  const [selectedJustify, setSelectedJustify] = useState('flex-start')
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
        <Container direction={selectedDirection} wrap={selectedWrap} justify={selectedJustify}>
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

        <form onSubmit={(e) => setDirection(e)}>
          <p>Direction: </p>
          <label>Row</label>
          <Input type={'radio'} value={'row'} onClick={() => setSelectedDirection('row')} checked={selectedDirection === 'row'}/>
          <label>Row-reverse</label>
          <Input type={'radio'} value={'row-reverse'} onClick={() => setSelectedDirection('row-reverse')} checked={selectedDirection === 'row-reverse'}/>
          <label>Column</label>
          <Input type={'radio'} value={'column'}  onClick={() => setSelectedDirection('column')} checked={selectedDirection === 'column'}/>
          <label>Column-reverse</label>
          <Input type={'radio'} value={'column-reverse'} onClick={() => setSelectedDirection('column-reverse')} checked={selectedDirection === 'column-reverse'}/>

        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Flex-wrap: </p>
          <label>Wrap</label>
          <Input type={'radio'} value={'wrap'} onClick={() => setSelectedWrap('wrap')} checked={selectedWrap === 'wrap'}/>
          <label>No-wrap</label>
          <Input type={'radio'} value={'no-wrap'} onClick={() => setSelectedWrap('no-wrap')} checked={selectedWrap === 'no-wrap'}/>
          <label>Wrap-reverse</label>
          <Input type={'radio'} value={'wrap-reverse'}  onClick={() => setSelectedWrap('wrap-reverse')} checked={selectedWrap === 'reverse'}/>
        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Justify-content: </p>
          <label>Flex-start</label>
          <Input type={'radio'} value={'flex-start'} onClick={() => setSelectedJustify('flex-start')} checked={selectedJustify === 'flex-start'}/>
          <label>Flex-end</label>
          <Input type={'radio'} value={'flex-end'} onClick={() => setSelectedJustify('flex-end')} checked={selectedJustify === 'flex-end'}/>
          <label>Center</label>
          <Input type={'radio'} value={'center'}  onClick={() => setSelectedJustify('center')} checked={selectedJustify === 'center'}/>
          <label>Space-between</label>
          <Input type={'radio'} value={'space-between'}  onClick={() => setSelectedJustify('space-between')} checked={selectedJustify === 'space-between'}/>
          <label>Space-around</label>
          <Input type={'radio'} value={'space-around'}  onClick={() => setSelectedJustify('space-around')} checked={selectedJustify === 'space-around'}/>
          <label>Space-evenly</label>
          <Input type={'radio'} value={'space-evenly'}  onClick={() => setSelectedJustify('space-evenly')} checked={selectedJustify === 'space-evenly'}/>
        </form>

      </Settings>
    </HomePage>
  );
}

export default App;
