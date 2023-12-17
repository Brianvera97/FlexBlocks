import React from 'react';
import './App.css';
import Header from './components/Blocks/Header/Header';
import Navigation from './components/Blocks/Navigation/Navigation';
import Main from './components/Blocks/Main/Main';
import SubContents from './components/Blocks/SubContents/SubContents';
import Advertisement from './components/Blocks/Advertisemens/Advertisement';
import ContentMain from './components/Blocks/ContentMain/ContentMain';


function App() {
  return (
    <div className="app">
      <Header />
      <ContentMain>
      <Navigation />
      <Main>
      <SubContents />
      <SubContents />
      <SubContents />
      <Advertisement />
      </Main>
      </ContentMain>
    </div>
  );
}

export default App;

