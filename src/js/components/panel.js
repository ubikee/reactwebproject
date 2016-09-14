import React from 'react';
import Header from './header';
import './panel.scss';

const Panel = (props) => {
  return (
    <div className={`panel ${props.className}`}>
      <Header icon={props.icon} title={props.title} />
      <section>
        {props.children}
      </section>
    </div>
  );
}

export default Panel;
