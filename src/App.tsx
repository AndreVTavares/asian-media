import React, { useState, useEffect } from 'react';

import Routes from './routes';
import api from './services/api';

import './assets/styles/global.css'

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    getApiRequest();
  }, []);

  const getApiRequest = () => {
    api
      .get(
        'search/tv?api_key=e0ced1b1c697172ba3767280468b0fd8&page=1&query=My%20Mister&include_adult=false'
      )
      .then((response) => {
        console.log(response.data);
        response.data.results.map((result: any) => {
          console.log(result.overview);
          console.log(result.name);
        });
      });
  };

  return (
      <Routes/>
  );
}

export default App;
