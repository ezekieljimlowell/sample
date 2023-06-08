import React from "react";
import { styled } from "styled-components";
import emptyProfile from "../../assets/images/empty-profile.webp"
import { Link } from "react-router-dom";

export const FlexBox = styled.div`
    display: flex;
    ${props => props.justify && `
        justify-content: ${props.justify};
    `}
    ${props => props.align && `
        align-items: ${props.align}
    `}
`
export const MarginDiv = styled.div`
    margin: 10px 20px 10px 20px;
    .profile {
        border-radius: 50px;
    }
    a {
        color: gray;
        text-decoration: none;
    }
`
export const NavBar = styled.div`
    background: #7393B3;
    background: linear-gradient(to right, #bdc3c7 0%, #2c3e50 100%);
    margin-bottom: 10px;
`

const Navigation = () => {
    return (
        <NavBar>
            <FlexBox justify="space-around" align="center">
                <h3>User Dashboard</h3>
                <FlexBox justify="space-between" align="center">
                    <MarginDiv>
                        <img src={emptyProfile} width="40px" height="40px" alt="profile" className="profile"></img>
                    </MarginDiv>
                    <MarginDiv>
                        <Link to="/">Logout</Link>
                    </MarginDiv>
                </FlexBox>
            </FlexBox >
        </NavBar>
    )
}

export default Navigation;