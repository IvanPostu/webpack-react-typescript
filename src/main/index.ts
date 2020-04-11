import '@/main/global.scss';
import React from 'react';
import { render } from 'react-dom';
import App from '@/typescript-react/App.tsx';

render(React.createElement(App, {}, null), document.getElementById('root'));
