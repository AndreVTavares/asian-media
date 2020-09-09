import React, { useState, useEffect } from 'react';

import api from '../../services/api';

const LandingPage = () => {
  const [title, setTitle] = useState('');

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
          setTitle(result.name);
        });
      });
  };

  return (
    <>
      <h1>Welcome to Asian Media</h1>
      <p>the best dorama: {title}</p>
    </>
  );
};

export default LandingPage;
