import styled from "styled-components";

export const NavBar = () => {
    return  (
        <div>
                <NavContainer href= "/todo">todo</NavContainer>
                <NavContainer href= "/about">about</NavContainer>
        </div>
    )
}

const NavContainer = styled.a`
    padding-left: 100px;
    padding: 10px;
    background-color:rgb(203, 219, 247);
`