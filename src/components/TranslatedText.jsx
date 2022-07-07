import React, { useContext } from "react";
import { context } from "../context/LanguagesProvider";
import useLangTarget from "../hooks/useLangTarget";
import LanguageSelector from "./LanguageSelector";

export default function TranslatedText() {

  const { selectTargetLanguage, langTarget } = useLangTarget()
  const { userInput } = useContext(context)
  
  return (
    <div>
      <LanguageSelector selectLanguage={selectTargetLanguage} current={langTarget}/>
      <p className="translated-text bottom-rounded border"> { userInput.translated } </p>
    </div>
  );
}
