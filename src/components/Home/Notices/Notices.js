import React, {useState, useEffect} from "react";
import { Result } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { getNoticesApi, getImageApi } from '../../../api/notice';

import moment from 'moment';

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "./Notices.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default function Notices() {

  const [notices, setNotices] = useState(null);


  useEffect(() => {
     getNoticesApi().then(res => {
         setNotices(res.noticesStored.docs);
    }).catch(err => {
      console.log(err);
    });
  }, []);


  if (notices) {
    
    return (
      <section id="notices" className="container mt-5 mb-4">
        <h1 className="mb-4">Últimas Noticias</h1>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
            width: 1024,
            slidesPerView: 3,
            spaceBetween: 20
          },
          }}
          navigation
          pagination={{ clickable: true }}
        >
  
         {notices.map(noticia => (
            <SwiperSlide key={noticia._id}>
            <Notice notice={noticia}/>
            </SwiperSlide>
  
          ))} 
        </Swiper>
      </section>
    );
  } 
  
  if (!notices){

    return (
      <section id="notices" className="container mt-5 mb-4">
      <h1>Últimas Noticias</h1>
      <Result
        status="404"
        title="Error 404"
        subTitle="Lo siento, no existen noticias."
      />
      </section>
    )

  }

  
  



  function Notice(props) {
    const {notice} = props;
    const [image, setImage] = useState(null);

    const day = moment(notice.date).format("DD");
    const month = moment(notice.date).format("MM");
    const year = moment(notice.date).format("YYYY");

    useEffect(() => {
      if (notice.image) {
        getImageApi(notice.image).then(response => {
            setImage(response);
        });
      } else {
        setImage(null);
      }
    }, [notice]);

    return (
      
      
      <div className="card" style={{width:"300px"}}>
    
       <div className="overflow">
       <img className="card-img-top" src={image} alt="noticia" />
       </div>
        <div className="card-body">
          <h5 className="card-title  text-justify">{notice.title}</h5>
          <p className="card-text">
            <small className="text-muted">{day}/{month}/{year}</small>
          </p>
          <p className="card-text text-justify">{notice.description}</p>
        </div>
      </div>
     
  
    
    )

  }



}
