import React from 'react'
import Navbarmenu from '../components/navbar-menu';
import { RiArticleLine, RiSearchLine } from "react-icons/ri";
import BoxInfo from '../components/box-info';
import "../styles/cards.css"
import ButtonSubmit from "../components/button-submit"


const JobDetail = () => {
  const icon1 = <RiSearchLine size={24} />;
  const icon2 = <RiArticleLine size={24} />;
  return (

    <div class="logged-container">
      <Navbarmenu
        title1 ="Find That Job"
        title2 ="Your Applications"
        icon1 = {icon1}
        icon2 = {icon2}
        link1 = "/jobs/all"
        link2 = "/jobsdetails"
      />
      <div>
        <div className="link-logged1">JOB TITLE</div>
        <ul className="parameters">
          <BoxInfo/>
          <BoxInfo/>
          <BoxInfo/>
        </ul>
        <div>
          <h5>Complete your aplicattion</h5>
        </div>
        <div>
          <ButtonSubmit>Upload CV</ButtonSubmit>
        </div>
        <div>
          <p class="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
        </div>
        <ButtonSubmit>SEND APLICATTION</ButtonSubmit>
      </div>
    </div>
    
  )
}

export default JobDetail