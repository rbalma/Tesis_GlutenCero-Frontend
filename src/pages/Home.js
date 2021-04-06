import React from "react";

import WelcomeSection from '../components/Home/WelcomeSection';
import Notices from '../components/Home/Notices';
import Contact from '../components/Home/Contact';
import Newsletter from '../components/Home/Newsletter';



export default function Home() {

    

  return (
    <>
      <WelcomeSection />
      <Notices/>
      <Contact />
      <Newsletter />
    </>
  );
}

