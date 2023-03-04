// import React from 'react';
import ReactDom from 'react-dom/client';

// target the root div
const rootDiv = document.getElementById('root');

// transform the root div into a react root
const reactRoot = ReactDom.createRoot(rootDiv);

// inject the react app into the react root
reactRoot.render();