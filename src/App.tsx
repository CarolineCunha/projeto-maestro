import React, { useState } from 'react';
import { Header} from './components/Header';
import { RepositoryList } from './components/RepositoryList';
import { GlobalStyle } from './styles/global';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
    <GlobalStyle />
    <Header />
    <RepositoryList />
  
    </>
  );
}

export default App;
