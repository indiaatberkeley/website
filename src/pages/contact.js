import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import ContactFormElement from "components/ContactForm"
import { Input, TextArea } from "flwww";

const AboutTitle = styled("h1")`
  margin-bottom: 0.25em;
    font-family: 'Inter var', sans-serif;

`

const PostCardAction = styled("button")`
font-weight: 600;
    font-size: 0.95em;
    color: currentColor;
	transition: all 150ms ease-in-out;

	background: none;
	color: inherit;
	border: none;
	font-family: 'Inter var', sans-serif;
	padding: 0;
	cursor: pointer;
	padding-top: 0.5em;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
	}

	&:hover {
       

            color: ${colors.blue500};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            
        }
    }

`

const BlogTitle = styled("h3")`
  margin-bottom: 1em;
    font-family: 'Inter var', sans-serif;

`
const ContactForm = styled("div")`
	display: flex;
	align-items: center;
	flex-direction: column;
  font-family: 'Inter var', sans-serif;

	.ContactFormInput{
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		font-family: 'Inter var', sans-serif;

	}



`
//https://medium.com/getform-all-about/building-a-gatsby-contact-form-using-getform-609b1096ba42

const RenderBody = ({ meta }) => (
	<>
		<Helmet
			title={`Contact | Speaker Series: India@Berkeley`}
			titleTemplate={`%s | Contact | Speaker Series: India@Berkeley`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: `Contact | Speaker Series: India@Berkeley`,
				},
				{
					property: `og:description`,
					content: meta.description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: meta.author,
				},
				{
					name: `twitter:title`,
					content: meta.title,
				},
				{
					name: `twitter:description`,
					content: meta.description,
				},
			].concat(meta)}
		/>
		<AboutTitle>Contact</AboutTitle>
		<BlogTitle>Contact us at <a href="mailto:indiaconference@berkeley.edu">indiaconference@berkeley.edu</a> or use the form below.</BlogTitle>
		<ContactForm>
			<ContactFormElement /></ContactForm>

		{/* <ContactForm action="https://formsubmit.co/pahujapiyush1@gmail.com" method="post">
			<input type="hidden" name="_next" value="https://iabgatsbycheck.onrender.com/thanks" />


			<input type="hidden" name="_captcha" value="false" />
			<div style={{ width: "500px" }}>
				<Input type="text" name="Name" placeholder="Name" className="ContactFormInput" required />
				<Input type="email" name="Email" placeholder="Email" className="ContactFormInput" />
				<Input type="text" name="Phone Number" placeholder="Phone Number" className="ContactFormInput" />
				<TextArea rows={4} name="Message" placeholder="Message" style={{ marginTop: "0.5em", marginBottom: "0.5em", fontFamily: "'Inter var', sans-serif" }} />
			</div>


			<PostCardAction className="PostCardAction" type="submit">
				Submit <span>&#8594;</span>
			</PostCardAction>


		</ContactForm> */}


	</>
)










export default ({ data }) => {
	//Required check for no data being returned

	return (

		<StaticQuery
			query={graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
      
      allPosts(sortBy: post_date_DESC) {
        edges {
          node {
            post_title
            post_hero_image
            post_date
            post_preview_description
            linkedin
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`}
			render={data => (
				<Layout>
					<RenderBody meta={data.site.siteMetadata} />

				</Layout>
			)}
		/>

	)
}

RenderBody.propTypes = {

	meta: PropTypes.object.isRequired,
}
