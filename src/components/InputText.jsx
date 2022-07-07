import React, { useContext } from "react";
import useLangSource from "../hooks/useLangSource";
import LanguageSelector from "./LanguageSelector";
import { context } from "../context/LanguagesProvider";

export default function InputText() {

  const { selectSourceLanguage, langSource } = useLangSource()
  const { setInput } = useContext(context)

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInput = e.target[0].value
    console.log(e.target[0].value)
    setInput(userInput)
  }
  return (
    <div>
      <LanguageSelector selectLanguage={selectSourceLanguage} current={langSource}/>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className="input border bottom-rounded" />
        <input type="submit" value="Traducir" className="traducir"/>
      </form>
      
    </div>
  );
}
