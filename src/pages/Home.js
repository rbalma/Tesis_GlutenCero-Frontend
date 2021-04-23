import React from "react";
import { BackTop } from 'antd';
import { FaArrowUp } from "react-icons/fa";
import WelcomeSection from '../components/Home/WelcomeSection';
import Notices from '../components/Home/Notices';
import Contact from '../components/Home/Contact';
import Newsletter from '../components/Home/Newsletter';



export default function Home() {

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };


  return (
    <>
      <WelcomeSection />
      <Notices/>
      <Contact />
      <Newsletter />

      <BackTop>
      <div style={style}><FaArrowUp /></div>
      </BackTop>

    </>
  );
}

