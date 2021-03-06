import React from "react";
import "../Styles/Progress.css";

import { BsArrowRight } from "react-icons/bs";


import iconform from "../Static/Images/icon1-form.png";
import iconcomputer from "../Static/Images/icon2-computer.png";
import iconman from "../Static/Images/icon3-man.png";
import iconfolder from "../Static/Images/icon4-folder.png";
import icondoctor from "../Static/Images/icon5-doctor.png";
import iconhouse from "../Static/Images/icon6-house.png";

import iconformC from "../Static/Images/icon1-form-copy.png";
import iconcomputerC from "../Static/Images/icon2-computer-c.png";
import iconmanC from "../Static/Images/icon3-man-c.png";
import iconfolderC from "../Static/Images/icon4-folder-c.png";
import icondoctorC from "../Static/Images/icon5-doctor-c.png";
import iconhouseC from "../Static/Images/icon6-house-c.png";


const Progress = ({testStatus}) => {
  return (
    <div className="wrapper-progress">
      <p className="title-progress">Tu avance</p>
      <div className="progress">
        <div>
          <img alt="iconform" src={testStatus === 'review' ? iconform : iconformC}
           className={testStatus === 'review' ? "icon-progress-form" : "icon-progress-formC"}/>
          <div className="wrapper-p-steps">
            <p>CV y Solicitud de empleo</p>
          </div>
        </div>
        <div className="wrapper-arrow">
          <BsArrowRight className="arrow"/>
        </div>
        <div>
          <img alt="iconcomputer" src={iconcomputer} className="icon-progress-computer"/>
          <div className="wrapper-p-steps">
            <p>Evaluación</p>
          </div>
        </div>
        <div className="wrapper-arrow">
          <BsArrowRight className="arrow"/>
        </div>
        <div>
          <img alt="iconman" src={iconman} className="icon-progress-man"/>
          <div className="wrapper-p-steps">
            <p>Entrevistas</p>
          </div>
        </div>
        <div className="wrapper-arrow">
          <BsArrowRight className="arrow"/>
        </div>
        <div>
          <img alt="iconfolder" src={iconfolder} className="icon-progress-folder"/>
            <div className="wrapper-p-steps">
              <p>Documentación</p>
            </div>
        </div>
        <div className="wrapper-arrow">
          <BsArrowRight className="arrow"/>
        </div>
        <div>
          <img alt="icondoctor" src={icondoctor} className="icon-progress-doctor"/>
          <div className="wrapper-p-steps">
            <p>Examen médico</p>
          </div>
        </div>
        <div className="wrapper-arrow">
          <BsArrowRight className="arrow"/>
        </div>
        <div>
          <img alt="iconhouse" src={iconhouse} className="icon-progress-house"/>
          <div className="wrapper-p-steps">
            <p>Estudio socio-económico</p>
          </div>
        </div>
      </div>
      <p className="p-check-recommendations">
        Revisa las <span className="focus-recommendation">Recomendaciones</span> sobre cada una de las etapas del proceso
      </p>
    </div>
  );
};

export default Progress;
