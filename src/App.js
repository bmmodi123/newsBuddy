import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apikey = process.env.REACT_APP_BART_API_KEY;
  const [progress, setProgress] = useState(0)
  // const newsCategory = ['business','entertainment','environment','food','health','politics','science','sports','technology','top','world'];
  const country = 'in';
  
  return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path="/" element={
              <News setProgress={setProgress} key="home" apikey={apikey} country={country} category="top" />} />
            <Route exact path="/business" element={
              <News setProgress={setProgress} key="business" apikey={apikey} country={country} category="business" />} />
            <Route exact path="/entertainment" element={
              <News setProgress={setProgress} key="entertainment" apikey={apikey} country={country} category="entertainment" />} />
            <Route exact path="/environment" element={
              <News setProgress={setProgress} key="environment" apikey={apikey} country={country} category="environment" />} />
            <Route exact path="/food" element={
              <News setProgress={setProgress} key="food" apikey={apikey} country={country} category="food" />} />
            <Route exact path="/health" element={
              <News setProgress={setProgress} key="health" apikey={apikey} country={country} category="health" />} />
            <Route exact path="/politics" element={
              <News setProgress={setProgress} key="politics" apikey={apikey} country={country} category="politics" />} />
            <Route exact path="/science" element={
              <News setProgress={setProgress} key="science" apikey={apikey} country={country} category="science" />} />
            <Route exact path="/sports" element={
              <News setProgress={setProgress} key="sports" apikey={apikey} country={country} category="sports" />} />
            <Route exact path="/technology" element={
              <News setProgress={setProgress} key="technology" apikey={apikey} country={country} category="technology" />} />
            <Route exact path="/world" element={
              <News setProgress={setProgress} key="world" apikey={apikey} country={country} category="world" />} />
            {/*{newsCategory.map((catName) => {
              return(
                <Route key={`/${catName}`}
                  exact path={`${catName}`} 
                  element={
                    <News setProgress={setProgress} apikey={apikey} country={country} category={catName} />
                  } />
                )
            })} */}

          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App