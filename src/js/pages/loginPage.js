import React from 'react';
import Page from '../components/page';
import Panel from '../components/panel';

const LoginPage = (props) => {

  const goto1 = () => console.log('goto1');

  return (
    <Page id="LoginPage" className="splash">
      <Panel title="Login">
        <div><label>Name</label><input type="text" /><i className="bar"/></div>
        <div><label>Password</label><input type="password" /><i className="bar"/></div>
        <nav><button><span>CANCEL</span></button><button><span>OK</span></button></nav>
      </Panel>
    </Page>
  );
}

export default LoginPage;
