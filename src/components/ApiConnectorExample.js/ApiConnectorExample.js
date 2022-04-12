import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ApiConnectorExample = () => {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios
      .get('https://rahexx-api.herokuapp.com/')
      .then((response) => {
        console.log('SUCCESS', response);
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p>React + Flask Tutorial</p>
      <div>
        {getMessage.status === 200 ? (
          <h3>{getMessage.data.msg}</h3>
        ) : (
          <h3>LOADING</h3>
        )}
      </div>
    </>
  );
};
