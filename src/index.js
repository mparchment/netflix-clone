import React from 'react';
import App from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import {render} from "react-dom";

render(<>
    <GlobalStyles/>
    <App />
    </>,
    document.getElementById('root'));