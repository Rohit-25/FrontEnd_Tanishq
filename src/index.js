import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Component/Routing';

//To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(<Routing/>)