import React, { useEffect, useState } from 'react';
import './App.css';
import Root from './Root/Root';
import Header from './Sections/Header';
import 'video-react/dist/video-react.css';


function App() {


  return (
   <>
   <Header/>
   <Root/>
   {console.log('API URL:', process.env.REACT_APP_API_URL)}
   {/* <FetchData /> */}
   </>
  );
}

export default App;

