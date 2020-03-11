import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Root = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1001;
    margin: 20px;
`;
export const HeaderField = styled.div`
    
`;
export const HeaderBox = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 20px;
    max-width: 800px;
`;


export const LinkBox = styled.div`
    text-align: center;
    width: 100px;
    line-height: 1.5em;
    margin: 20px;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: .03em;
    margin-top: 0;
`;
export const StyleLink = styled(Link)`
    color: black;
    font-size: 16px;
`;

export const MenuField = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: white;
`;