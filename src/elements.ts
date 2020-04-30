import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: auto;
    width: 100vw;
  height: 100vh;
  grid-auto-rows: minmax(100px, auto);
      text-align: center;
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
    margin: auto;
`;
