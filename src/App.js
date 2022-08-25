import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 8;
  const apikey = process.env.REACT_APP_APIKEY;
  const [progress, setProgress] = useState(0)
  
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
            <Route exact path="/" element={<News setProgress={setProgress} key="home" apikey={apikey} country="in" category="general" pageSize={pageSize}/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" apikey={apikey} country="in" category="business" pageSize={pageSize}/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apikey={apikey} country="in" category="entertainment" pageSize={pageSize}/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" apikey={apikey} country="in" category="general" pageSize={pageSize}/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" apikey={apikey} country="in" category="health" pageSize={pageSize}/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" apikey={apikey} country="in" category="science" pageSize={pageSize}/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apikey={apikey} country="in" category="sports" pageSize={pageSize}/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apikey={apikey} country="in" category="technology" pageSize={pageSize}/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App