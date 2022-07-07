import React, { useState } from "react";
import downArrow from "../assets/down-arrow.svg"
import ModalLanguages from "./ModalLanguages";

export default function MoreLanguages({ selectLanguage }) {

  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <img src={downArrow} alt="down-arrow" className="arrow" 
      onClick={()=> setShowModal(true)}/>
      
      <ModalLanguages 
      onHide={()=>setShowModal(false)} 
      showModal={showModal} 
      selectLanguage={selectLanguage}
      />
    </>
  );
}
