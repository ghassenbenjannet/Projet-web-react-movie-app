import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routing/Router';

const App: React.FC = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
