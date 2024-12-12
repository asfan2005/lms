import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Asosiy, Footer, Header, New, Statistika, TezkorKirish } from "./components/index";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      <Header />
      <Asosiy/>
      <TezkorKirish/>
      <Statistika/>
      <New/>
      <Footer/>
    </main>
  );
}

export default App;
