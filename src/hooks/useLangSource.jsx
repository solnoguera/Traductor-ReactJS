import React, { useContext } from 'react'
import { context } from '../context/LanguagesProvider'

export default function useLangSource() {
    const { langSource, selectSourceLanguage } = useContext(context)
    return { langSource, selectSourceLanguage }
}
