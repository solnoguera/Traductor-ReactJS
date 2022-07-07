import React, { useContext } from 'react'
import { context } from '../context/LanguagesProvider'

export default function useLangTarget() {
    const { langTarget, selectTargetLanguage } = useContext(context)
    return { langTarget, selectTargetLanguage }
}
