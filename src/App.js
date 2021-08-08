import React, { Fragment } from 'react';
import CarCrashHeader from './components/Layout/CarCrashHeader';
import CarCrashList from './components/Cars/CarCrashList';
import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <CarCrashHeader/>
      <main className={classes.second}>
        <CarCrashList />
      </main>
    </Fragment>
  );
}

export default App;
