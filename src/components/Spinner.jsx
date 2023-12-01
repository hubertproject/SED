/* eslint-disable no-unused-vars */
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Loader
        type="Hearts"
        color="rgb(0, 153, 255)"
        height={100}
        width={100}
        timeout={3000} // 3 secs
      />
    </div>
  );
};

export default Spinner;
