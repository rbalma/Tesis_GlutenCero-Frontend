import React, {useState, useEffect} from "react";

import WelcomeSection from '../components/Home/WelcomeSection';
import Notices from '../components/Home/Notices';
import Contact from '../components/Home/Contact';
import Newsletter from '../components/Home/Newsletter';
import {getNoticesApi} from "../api/notice";


export default function Home() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
     getNoticesApi().then(res => {
      setNotices(res.notices);
    });
  }, []);
    

  return (
    <>
      <WelcomeSection />
      <Notices notices={notices} />
      <Contact />
      <Newsletter />
    </>
  );
}

