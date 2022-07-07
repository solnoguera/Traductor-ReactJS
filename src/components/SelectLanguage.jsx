import React from "react";
import ISO6391 from "iso-639-1";
import { Nav } from "react-bootstrap";
import MoreLanguages from "./MoreLanguages";

export default function SelectLanguage({ selectLanguage, current }) {

  const handleSelect = (selectedKey) => {
    selectLanguage(selectedKey)
  }
  return (
    <div className="border top-rounded selector">
      <Nav onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey={current} >
            <span className='current-lang'>
            {ISO6391.getName(current)}
            </span>
            
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="en">ENGLISH</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="es">SPANISH</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="pt">PORTUGUESE</Nav.Link>
        </Nav.Item>
        <MoreLanguages selectLanguage={selectLanguage}/>
      </Nav>
    </div>
  );
}
