import React from 'react';

import './app.scss';
import PhotoEditor from './components/photoeditor';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <h1>PhotoEditor</h1>

        <PhotoEditor />

      </div>
    )
  }
}

export default App;
