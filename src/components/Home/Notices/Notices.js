import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "./Notices.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    title: "Llega la pizza con masa de brócoli, apta para celíacos.",
    description:
      " Acaba de llegar al mercado una nueva masa de pizza elaborada a base de brócoli, un producto que lleva años triunfando entre los alimentos más saludables y al que parece que le ha llegado la hora de reinventarse.",
    date: "18/09/2019",
    image:
      "https://www.infoceliaco.com/images/stories/infoceliaco/2019/Pizza-masa-brocoli-celiacos.jpg",
  },
  {
    id: 2,
    title: "Anmat ordenó el retiro de productos para celíacos de una empresa de Bariloche",
    description:
      "Se trata de todos los productos elaborados por la empresa barilochense Ruca Umel con fecha de elaboración anterior al 9 de octubre.",
    date: "20/10/2019",
    image:
      "https://www.rionegro.com.ar/wp-content/uploads/2019/10/anmat.jpg?w=920&h=520&crop=1",
  },
  {
    id: 3,
    title: "Celíacos en crisis",
    description:
      "La canasta básica cuesta tres veces más que la común. La eliminación del IVA a la canasta básica no alcanzó a los productos libres de gluten, que además subieron un 35%. Muchos apuestan a la elaboración propia de alimentos para mantener el tratamiento médico sin afectar tanto el bolsillo",
    date: "22/10/2019",
    image:
      "https://www.rionegro.com.ar/wp-content/uploads/2019/09/Imagen-ROCA-Productos-sin-TACC-GM-06.jpg?w=920&h=520&crop=1",
  }
];

export default function Home() {
  return (
    <div className="notices">
      <h1>Noticias</h1>
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
          spaceBetween: 20,
        },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((notices) => (
          <SwiperSlide key={notices.id}>
            <div className="card size">
              <img
                className="card-img-top img-fluid"
                src={notices.image}
                alt="noticia"
              />
              <div className="card-body">
                <h5 className="card-title  text-justify">{notices.title}</h5>
                <p className="card-text">
                  <small className="text-muted">{notices.date}</small>
                </p>
                <p className="card-text text-justify">{notices.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
