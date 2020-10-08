import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PostCard from "components/PostCard"
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
`
const ContactForm = styled("form")`
	display: flex;
	align-items: center;
	flex-direction: column;

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
		<BlogTitle>Thanks</BlogTitle>




	</>
)










export default ({ data }) => {
	//Required check for no data being returned
	const meta = data.site.siteMetadata

	return (
		<Layout>
			<RenderBody meta={meta} />

		</Layout>
	)
}

RenderBody.propTypes = {

	meta: PropTypes.object.isRequired,
}

export const query = graphql`
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
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
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
`
