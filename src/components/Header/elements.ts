import styled from "styled-components";
import { Link } from 'react-router-dom'
export const HeaderField = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1001;
    margin: 20px;
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
`;
export const StyleLink = styled(Link)`
    color: black;
`;