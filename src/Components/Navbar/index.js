import React from "react";
// import { Link } from "react-router-dom";
import { NavbarSection, UlList, LogoText, Logo, Anchor, ListItem, LinkNav } from "./style.js";

const Navbar = () => {
  
  return (
    <div className="">
      <NavbarSection>
        <div className="container d_flex">
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>
            <ListItem className="list-item">
              <LinkNav to="/">Home</LinkNav>
            </ListItem>
            <ListItem className="list-item">
              <Anchor to="/">Work</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor to="/">Portfolio</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor to="/">Resume</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <Anchor to="/">About</Anchor>
            </ListItem>
            <ListItem className="list-item">
              <LinkNav to="/contact">Contact</LinkNav>
            </ListItem>
          </UlList>
        </div>
      </NavbarSection>
    </div>
  );
};

export default Navbar;
