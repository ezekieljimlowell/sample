import { styled } from "styled-components";
import loginBackground from "../../assets/images/login-background.jpg";

export const LoginBackground = styled.div`
    background-image: url(${loginBackground});
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    background: white;
    border-radius: 8px;
    box-shadow: 5px;
    .loginButton {
        width: 250px;
        height: 30px;
        margin: 25px 0 15px 0;
        padding: 0;
    }
`;
export const Input = styled.input`
width: 250px;
height: 30px;
margin: 25px 0 0 0;
border: 2px solid gray;
border-radius: 5px;
padding: 10px;
`
export const LinkWrapper = styled.div`
    margin-bottom: 15px;
`