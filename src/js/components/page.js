import React from 'react';
import './page.scss';

const Page = (props) => (
  <div className="page">
    {props.header}
    <article className={props.className}>
      {props.children}
    </article>
  </div>
);

export default Page;
