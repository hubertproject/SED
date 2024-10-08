 /* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '../layout/Button';
import sedb from '../assets/sedb.jpg';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Review from '../components/Review';
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); 

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#D0021B"} loading={loading} size={50} />
        </div>
      ) : (
        <div>
          <div className="min-h-[60vh] flex flex-col md:flex-row md:justify-between items-center md:mx-5 mx-5 mt-5">
            <div className="md:w-2/4 text-left rounded-lg p-2">
              <p className="text-white-smoke mt-20 text-left text-4xl font-bold">
                Become an Elite <p className="text-white-smoke">Software Engineer</p>
              </p>
              <p className="text-whitey mt-5 text-start text-lg">
                Access remote job placement opportunities with global companies and
                enjoy a western standard income and endless opportunities for growth
                and advancement
              </p>
              <div className="mt-5"></div>
              <Link to="/PaymentForm">
                <Button title="Get Started" />
              </Link>
            </div>

            <div className="w-full md:w-2/4 mt-10">
              <img src={sedb} alt="img" height="900" width="800" />
            </div>
          </div>

           
          <About />
          <Review />
        </div>
      )}
    </div>
  );
};

export default Home;
