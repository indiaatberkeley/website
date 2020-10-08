import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import spooch from "images/oscar-icon.png";
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram, GrFacebookOption } from 'react-icons/gr';


const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
  font-family: 'Inter var', sans-serif;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 1.5em;
    color: ${colors.grey800};
    display: flex;
	flex-direction: column;
	  font-family: 'Inter var', sans-serif;

    align-items: center;
    text-decoration: none;
    margin-top: 0.75em;
	margin-right: 0.25em;
margin-left: 0.25em;

     &:hover {
         color: ${colors.blue900};

        
    }

    
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-top: 0.25em;
`

const Footer = () => (
	<FooterContainer>
		<Link to="/">
			<Logo />
		</Link>
		<div style={{ display: "flex", flexDirection: "row" }}>
			<FooterAuthor href="https://www.facebook.com/SSIBerkeley/" target="_blank">
				<GrFacebookOption />
			</FooterAuthor>
			<FooterAuthor href="https://www.instagram.com/speakerseries_cal/" target="_blank">
				<GrInstagram />
			</FooterAuthor>
		</div>
	</FooterContainer>
)

export default Footer;
