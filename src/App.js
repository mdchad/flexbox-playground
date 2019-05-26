import React from 'react';
import MainView from './components/MainView';
import styled from 'styled-components'
import './App.css';
import Settings from './components/Settings';

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

function App() {
  return (
    <HomePage>
      <MainView>
        Hello world
      </MainView>
      <Settings>
        Settings yo
      </Settings>
    </HomePage>
  );
}

export default App;
