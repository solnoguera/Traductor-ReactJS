import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import useLanguages from '../hooks/useLanguages'
import Languages from './Languages'
import x from '../assets/x.svg'

export default function ModalLanguages({ onHide, showModal, selectLanguage }) {

    const { languages } = useLanguages()
    const [filteredLang, setFilteredLang] = useState(null)
    
    const handleOnChange = (e) => {
        const input = e.target.value.toLowerCase() 
        if(input === '') cleanSearch()
        const filtered = languages.filter((lang) => lang.name.toLowerCase().includes(input))
        setFilteredLang(filtered)
    }
    const cleanSearch = () => {
      setFilteredLang(null)
    }

  return languages && (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <input type="search" placeholder='Buscar Idioma...' className="buscador" 
        onChange={handleOnChange}
        />
        <img src={x} alt="x" width={25} onClick={onHide}/>
      </Modal.Header>
      <Modal.Body>

        <Languages 
          languages={filteredLang ? filteredLang : languages}
          selectLanguage={selectLanguage} 
          onHide={onHide} 
          cleanSearch={cleanSearch}
        />
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )

}

