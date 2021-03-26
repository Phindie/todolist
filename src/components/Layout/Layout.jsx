import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const Header = styled.header`
  background: #b0bea9;
  color: black;
  text-align: center;
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
  padding: 0.1rem 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: lightgrey;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const List = styled.ul`
  list-style: none;
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LinkWrap = styled.li`
  width: 50%;
`;
const PAGE_TITLE_MAP = {
  home: "To-do List",
  add: "Adding Item",
  edit: "Editing Item",
};

const StyledButton = styled(Button)`
  && {
    color: white;
  }
`;

const Layout = (props) => {
  const { children, activePage, userName, onUserClick } = props;
console.log(onUserClick)
  return (
    <>
      <Header>
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>
        <StyledButton
          onClick={onUserClick}
        
          startIcon={userName ? <AccountCircle /> : undefined}
        >
          {userName || "Log in"}
        </StyledButton>
      </Header>

      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link fullWidth disabled={activePage === "home"} url="/">
                Back to Home
              </Link>
            </LinkWrap>

            <LinkWrap>
              <Link fullWidth disabled={activePage === "add"} url="/add">
                Add new item
              </Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};

export default Layout;
