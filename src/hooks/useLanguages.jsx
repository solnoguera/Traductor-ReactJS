import React, { useEffect, useState } from 'react'
import ISO6391 from "iso-639-1";

export default function useLanguages() {

    const [languages, setLanguages] = useState()

    useEffect(()=>{
      const lang = localStorage.getItem("languages");
      const splitted = lang.split(',')
      const languages = splitted.map((isoCode) => {
        return { name: ISO6391.getName(isoCode), isoCode}
      })
      setLanguages(languages)
    },[])
    
  return { languages }
}
