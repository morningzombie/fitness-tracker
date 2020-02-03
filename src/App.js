import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import qs from "qs";


import Home from './components/Home';
import Cardio from './components/Cardio';
import Strength from './components/Strength';
import Stretch from './components/Stretch';
import More from './components/More';


const goCardio = () => {
  window.location.href = "#view=cardio"
}
const goStrength = () => {
  window.location.href = "#view=strength"
}
const goStretch = () => {
  window.location.href = "#view=stretch"
}
const goMore = () => {
  window.location.href = "#view=more"
}


const getHash = () => {
  return window.location.hash.slice(1);
};

function App() {
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);


  return (
    <div>
      <Header />
      {params.view === undefined ? (
        <Home
          goCardio={goCardio}
          goStrength={goStrength}
          goStretch={goStretch}
          goMore={goMore}
        />
      ) : null}
      {params.view === "cardio" ? <Cardio /> : null}
      {params.view === "strength" ? <Strength /> : null}
      {params.view === "stretch" ? <Stretch /> : null}
      {params.view === "more" ? <More /> : null}
    </div>
  );
}

export default App;
