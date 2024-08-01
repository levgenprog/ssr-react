import React from 'react';
import {hydrateRoot} from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';
import {BrowserRouter} from '@nxweb/react';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Price from './components/Price.jsx';
const HomeComponent = () => <Home />;
const AboutComponent = () => <About />;
const PricesComponent = () => <Price />

const routes = [
  {
    path: '/',
    element: HomeComponent
  },
  {
    path: '/about',
    element: AboutComponent
  },
  {
    path: '/price',
    element: PricesComponent
  },
];


hydrateRoot(document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter basePath='/' routes={routes} >
      <App />
    </BrowserRouter>
    {/* <SSRRouter routes={routes} location='/' basePath='/'>
      <App />
    </SSRRouter> */}
  </React.StrictMode>);