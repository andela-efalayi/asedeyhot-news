import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout';

injectTapEventPlugin();
const app = document.getElementById('app');

ReactDom.render(<Layout />, app);
