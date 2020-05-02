import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import myApp from "./myApp";
import Clock from "./components/Clock";

import Tom from "./Tom";
import Desktop from "./myDesktop";
import Desktop2 from './components/desktop'
import Folder from './components/Folder'
import ContextMenu from './components/contextMenu'
import ClickMe from './components/testContextClick';

ReactDOM.render(
 //<Folder path="C:/Users/liwe"/>,
 <ClickMe/>, 
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
