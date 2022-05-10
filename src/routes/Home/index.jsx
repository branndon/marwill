import React, { useEffect } from 'react'


// styles
import { Container, ContainerCenter, Title } from './styles';

// API
import API from "../../services";

function Home() {

  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);


  return (
    <>
      <p>ABC</p>
    </>
  )
}

export default Home;
