import React from 'react';

import Page from '../components/page';
import Header from '../components/header';
import Icon from '../components/icon';

const DossierPage = ({dossier}) => {

  const title = dossier && dossier.title ? dossier.title : '<dossier title>';
  const goto1 = () => console.log('goto1');

  const header = (
    <Header icon="folder" title={title} className="float translucent">
      <Icon icon="folder" action={goto1} />
      <Icon icon="folder" action={goto1} />
    </Header>
  )

  return (
    <Page id="DossierPage" header={header}>

    </Page>
  );
}

export default DossierPage;
