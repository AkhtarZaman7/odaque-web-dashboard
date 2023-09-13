import React from 'react';
import Header from '../components/Header';

const Main = (props) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div>
      <Header />

      <main>{props.children}</main>
    </div>
  </div>
);

export { Main };