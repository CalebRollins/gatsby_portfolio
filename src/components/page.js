import React from 'react';
import Header from './header.js';

const Page = props =>
  <div className="flex-container">
   <div className="header">
    <Header />
   </div>
    <div className="content">
      {props.children}
    </div> 
  </div>

export default Page;