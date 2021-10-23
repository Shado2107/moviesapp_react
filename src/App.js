import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './config/Router';

function App() {

  return (
    <>
   <BrowserRouter>
      <Route  render={props => (
        <> 
          <Header {...props} />
          <Router/>
          <Footer/>
        </>
      )} />
   </BrowserRouter>
   </>
  );
}

export default App;
