import React from "react";
import styled from "styled-components";

const Styledh5 = styled.h5`
    color: #212121;
    font-weight: 400;
    margin: 0.5em 0;
`;

const H5Element = ({ children }) => <Styledh5>{children}</Styledh5>;

export default H5Element;
