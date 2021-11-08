import styled from "styled-components";

export const NavBar = () => {
    return  (
        <NavContainer>
                <Nav href= "/todo">Todo</Nav>
                <LoginContainer>
                    <Nav href= "/login">Login</Nav>
                    <Nav href= "/register">Register</Nav>
                </LoginContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    padding-left: 100px;
    padding: 10px;
    background-color:rgb(203, 219, 247);
    width: 98%;
`
const Nav = styled.a`
    padding: 10px;
    text-decoration: none;
`
const LoginContainer = styled.a`
    float: right;
`