import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import axios from 'axios'
import './index.css'
import 'layui-src/dist/css/layui.css'

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(<App />, document.getElementById('root'));
