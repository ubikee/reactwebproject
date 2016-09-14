import React from 'react';

import Page from '../components/page';
import Header from '../components/header';
import Icon from '../components/icon';

const DossierListPage = ({dossier}) => {

  const goto1 = () => console.log('goto1');

  const header = (
    <Header icon="folder" title="Dossiers" className="float translucent">
      <Icon icon="folder" action={goto1} />
      <Icon icon="folder" action={goto1} />
    </Header>
  )

  return (
    <Page id="DossierListPage" header={header}>

    </Page>
  );
}

export default DossierListPage;
