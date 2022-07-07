import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand>
          <SolLogo />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function SolLogo() {
  return (
    <div className="flex">
      <div className="logo">
        <span style={{ color: "blue" }}>S</span>
        <span id="red">o</span>
        <span id="yellow">o</span>
        <span id="green">l</span>
      </div>
      <span id="traductor"> Translator</span>
    </div>
  );
}
