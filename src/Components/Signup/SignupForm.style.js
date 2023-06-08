import { styled } from "styled-components";

export const Select = styled.select`
    width: 250px;
height: 30px;
margin: 25px 0 0;
border: 2px solid gray;
border-radius: 5px;
padding-left: 10px;
${props => props.multiple && `height: auto;
`}
${props => !props.department && `height: 30px`}
`