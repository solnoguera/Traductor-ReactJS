import React, { useContext } from "react";
import useLangSource from "../hooks/useLangSource";
import SelectLanguage from "./SelectLanguage";
import { context } from "../context/LanguagesProvider";

export default function InputText() {

  const { selectSourceLanguage, langSource } = useLangSource()
  const { setInput } = useContext(context)

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInput = e.target[0].value
    setInput(userInput)
  }
  return (
    <div>
      <SelectLanguage selectLanguage={selectSourceLanguage} current={langSource}/>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className="input border bottom-rounded" />
        <input type="submit" value="Traducir" className="traducir"/>
      </form>
      
    </div>
  );
}
