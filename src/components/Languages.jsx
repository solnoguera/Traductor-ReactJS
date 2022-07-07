import React from 'react'

export default function Languages({ languages, selectLanguage, onHide, cleanSearch }) {

  const handleClick = (lang) => {
    selectLanguage(lang)
    onHide()
    cleanSearch()
  }

  return (
    <div className='languages'>
        {
            languages.map( (lang) => lang.name && 
            <p 
              className='language' 
              onClick={ () => handleClick(lang.isoCode) }
              key={lang.isoCode}  
            >
                {lang.name}
            </p> )
        }
    </div>
  )
}
