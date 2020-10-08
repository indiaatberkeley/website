import React from "react";
import Button from "components/_ui/Button";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const AboutContainer = styled("div")`
	padding-top: 1em;
	  font-family: 'Inter var', sans-serif;


`


const AboutBio = styled("div")`
	padding-bottom: 3em;
	  font-family: 'Inter var', sans-serif;


`




const About = ({ bio, socialLinks }) => (
	<AboutContainer>

		<AboutBio>
			{RichText.render(bio)}
		</AboutBio>

	</AboutContainer>
)

export default About;

About.propTypes = {
	bio: PropTypes.array.isRequired,
};
