import React from 'react';
import './app.scss';

import LoginPage from './pages/loginPage';
import LoadPage from './pages/loadPage';
import DossierListPage from './pages/dossierListPage';
import DossierPage from './pages/dossierPage';

class App extends React.Component {

  render() {
    return(
      <div className="dev app">
        <LoginPage />
        <LoadPage />
        <DossierListPage />
        <DossierPage />
      </div>
    )
  }
}

export default App;
