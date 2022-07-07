import React, { useContext } from "react";
import { context } from "../context/LanguagesProvider";
import useLangTarget from "../hooks/useLangTarget";
import SelectLanguage from "./SelectLanguage";

export default function TranslatedText() {

  const { selectTargetLanguage, langTarget } = useLangTarget()
  const { userInput } = useContext(context)
  
  return (
    <div>
      <SelectLanguage selectLanguage={selectTargetLanguage} current={langTarget}/>
      <p className="translated-text bottom-rounded border"> { userInput.translated } </p>
    </div>
  );
}
