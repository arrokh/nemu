import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast, ToastContainer } from 'react-toastify';
import HeaderNavigation from './components/HeaderNavigation';
const KeyboardEventHandler = require('react-keyboard-event-handler');

const Welcome = lazy(() => import('./scenes/Welcome'));
const ManualBook = lazy(() => import('./scenes/ManualBook'));
const Playground = lazy(() => import('./scenes/Playground'));
const About = lazy(() => import('./scenes/About'));

export default function App() {

  const keyHandler = () => {
    localStorage.removeItem('nemu-new');
    localStorage.removeItem('nemu-new-playground');
    localStorage.removeItem('nemu-new-manual-book');

    toast('Clear storage', { autoClose: 1000 });
  }

  return (
    <BrowserRouter>
      <KeyboardEventHandler handleKeys={['f2']} onKeyEvent={keyHandler} />
      <ToastContainer />
      <Suspense fallback={<LinearProgress />}>
        <HeaderNavigation />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/manual-book" component={ManualBook} />
          <Route exact path="/about" component={About} />
          <Redirect from='*' to='/' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}