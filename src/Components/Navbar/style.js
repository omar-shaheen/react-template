import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection = styled.div`
  padding: 5px 0;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 30%;

  @media (max-width: 991px) {
    .navbar .logo {
      width: 100%;
      float: none;
    }
  }
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const UlList = styled.ul`
  width: 70%;
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    .navbar .ul-list {
      width: 100%;
      float: none;
      margin-top: 20px;
      display: none;
    }
  }
`;

export const ListItem = styled.li`
  display: inline-block;

  @media (max-width: 991px) {
    .navbar .ul-list .list-item {
      display: block;
      text-align: center;
    }
  }
`;

export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }
`;

export const LinkNav = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }
`;
