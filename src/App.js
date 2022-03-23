import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainTemplate } from './components/templates/MainTemplate';
import { MainView } from './components/views/MainView';

const App = () => (
  <>
    <MainTemplate>
      <MainView />
    </MainTemplate>
  </>
);

export default App;
