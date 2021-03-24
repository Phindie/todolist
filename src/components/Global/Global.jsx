import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{ 
      box-sizing: border-box;
  }

  body {
      overflow-x: hidden;
      overflow-y: scroll;
      background: #C3F3C0;
      font-family: Arial, sans-serif;
      padding: 0 0 8rem 0!important;
      margin: 0 !important;
  }
`
const Global = (props) =>{
    const { children } = props;
   
    return (
        <>

         <GlobalStyles />
         { children }
        </>
    )
}

export default Global;