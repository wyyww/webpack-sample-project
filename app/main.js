/**
 * Created by PC on 2017/6/30.
 */
//main.js
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import  './css/main.css'

render(<Greeter />, document.getElementById('root'));