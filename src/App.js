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

        <form onSubmit={(e) => setDirection(e)}>
          <p>Direction: </p>
          <label>Row</label>
          <Input type={'radio'} value={'row'} onChange={() => setSelectedDirection('row')} checked={selectedDirection === 'row'}/>
          <label>Row-reverse</label>
          <Input type={'radio'} value={'row-reverse'} onChange={() => setSelectedDirection('row-reverse')} checked={selectedDirection === 'row-reverse'}/>
          <label>Column</label>
          <Input type={'radio'} value={'column'}  onChange={() => setSelectedDirection('column')} checked={selectedDirection === 'column'}/>
          <label>Column-reverse</label>
          <Input type={'radio'} value={'column-reverse'} onChange={() => setSelectedDirection('column-reverse')} checked={selectedDirection === 'column-reverse'}/>

        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Flex-wrap: </p>
          <label>Wrap</label>
          <Input type={'radio'} value={'wrap'} onChange={() => setSelectedWrap('wrap')} checked={selectedWrap === 'wrap'}/>
          <label>No-wrap</label>
          <Input type={'radio'} value={'no-wrap'} onChange={() => setSelectedWrap('no-wrap')} checked={selectedWrap === 'no-wrap'}/>
          <label>Wrap-reverse</label>
          <Input type={'radio'} value={'wrap-reverse'}  onChange={() => setSelectedWrap('wrap-reverse')} checked={selectedWrap === 'reverse'}/>
        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Justify-content: </p>
          <label>Flex-start</label>
          <Input type={'radio'} value={'flex-start'} onChange={() => setSelectedJustify('flex-start')} checked={selectedJustify === 'flex-start'}/>
          <label>Flex-end</label>
          <Input type={'radio'} value={'flex-end'} onChange={() => setSelectedJustify('flex-end')} checked={selectedJustify === 'flex-end'}/>
          <label>Center</label>
          <Input type={'radio'} value={'center'}  onChange={() => setSelectedJustify('center')} checked={selectedJustify === 'center'}/>
          <label>Space-between</label>
          <Input type={'radio'} value={'space-between'}  onChange={() => setSelectedJustify('space-between')} checked={selectedJustify === 'space-between'}/>
          <label>Space-around</label>
          <Input type={'radio'} value={'space-around'}  onChange={() => setSelectedJustify('space-around')} checked={selectedJustify === 'space-around'}/>
          <label>Space-evenly</label>
          <Input type={'radio'} value={'space-evenly'}  onChange={() => setSelectedJustify('space-evenly')} checked={selectedJustify === 'space-evenly'}/>
        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Align-items: </p>
          <label>Stretch</label>
          <Input type={'radio'} value={'stretch'} onChange={() => setSelectedAlignItems('stretch')} checked={selectedAlignItems === 'stretch'}/>
          <label>Flex-start</label>
          <Input type={'radio'} value={'flex-start'} onChange={() => setSelectedAlignItems('flex-start')} checked={selectedAlignItems === 'flex-start'}/>
          <label>Flex-end</label>
          <Input type={'radio'} value={'flex-end'}  onChange={() => setSelectedAlignItems('flex-end')} checked={selectedAlignItems === 'flex-end'}/>
          <label>Center</label>
          <Input type={'radio'} value={'center'}  onChange={() => setSelectedAlignItems('center')} checked={selectedAlignItems === 'center'}/>
          <label>Baseline</label>
          <Input type={'radio'} value={'baseline'}  onChange={() => setSelectedAlignItems('baseline')} checked={selectedAlignItems === 'baseline'}/>
        </form>

        <form onSubmit={(e) => setDirection(e)}>
          <p>Align-content: </p>
          <label>Stretch</label>
          <Input type={'radio'} value={'stretch'} onChange={() => setSelectedAlignContent('stretch')} checked={selectedAlignContent === 'stretch'}/>
          <label>Flex-start</label>
          <Input type={'radio'} value={'flex-start'} onChange={() => setSelectedAlignContent('flex-start')} checked={selectedAlignContent === 'flex-start'}/>
          <label>Flex-end</label>
          <Input type={'radio'} value={'flex-end'}  onChange={() => setSelectedAlignContent('flex-end')} checked={selectedAlignContent === 'flex-end'}/>
          <label>Center</label>
          <Input type={'radio'} value={'center'}  onChange={() => setSelectedAlignContent('center')} checked={selectedAlignContent === 'center'}/>
          <label>Space-around</label>
          <Input type={'radio'} value={'space-around'}  onChange={() => setSelectedAlignContent('space-around')} checked={selectedAlignContent === 'space-around'}/>
          <label>Space-between</label>
          <Input type={'radio'} value={'space-between'}  onChange={() => setSelectedAlignContent('space-between')} checked={selectedAlignContent === 'space-between'}/>
        </form>

      </Settings>
    </HomePage>
  );
}

export default App;
