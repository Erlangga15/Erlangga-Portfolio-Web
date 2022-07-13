import React from 'react';

import { Header, About } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
		<About />
  </div>
);

export default App;
