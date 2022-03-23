import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainTemplate } from './components/templates/MainTemplate';
import { MainView } from './components/views/MainView';
import { Image3DView } from './components/views/Image3DView';

const App = () => (
  <>
    <Router>
      <MainTemplate />
      <Routes>
        <Route exact path='/' element={<MainView />} />
        <Route exact path='/3dImage' element={<Image3DView />} />
      </Routes>
    </Router>
  </>
);

export default App;
