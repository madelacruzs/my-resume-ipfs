import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutAvatarImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #0073b1;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const Abouth2 = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: 0.5em 0 0 0;
    color: #0073b1;
`;
const AboutProfession = styled.p`
    margin: 0.2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #0073b1;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: #757575;
`;

const About = ({ avatar, name, profession, bio, address, social }) => {
    return (
        <AboutStyle>
            <div className="About-container">
                <AboutAvatar>
                    <AboutAvatarImg src={avatar} alt={name} />
                </AboutAvatar>
                <AboutName>
                    <Abouth2>{name}</Abouth2>
                </AboutName>
                <AboutProfession>{profession}</AboutProfession>
                <AboutBio>{bio}</AboutBio>
                <AboutLocation>{address}</AboutLocation>
                <div className="About-social">
                    <Social social={social} />
                </div>
            </div>
        </AboutStyle>
    );
};

export default About;
