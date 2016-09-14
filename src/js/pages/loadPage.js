import React from 'react';
import Page from '../components/page';
import Panel from '../components/panel';

const LoadPage = (props) => {

  const goto1 = () => console.log('goto1');

  return (
    <Page id="LoadPage" className="splash">
      <Panel title="Load">
        <div><progress value="50" max="100"/></div>
      </Panel>
    </Page>
  );
}

export default LoadPage;
