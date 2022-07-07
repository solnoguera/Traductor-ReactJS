import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "./InputText";
import TranslatedText from "./TranslatedText";
import LanguagesProvider from '../context/LanguagesProvider'

export default function Translator() {
  return (
    <LanguagesProvider>
      <Container fluid="md" className="translator">
        <Row>
          <Col>
            <InputText />
          </Col>
          <Col>
            <TranslatedText />
          </Col>
        </Row>
      </Container>
    </LanguagesProvider>
  );
}
