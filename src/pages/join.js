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
import { Timeline, Steps } from 'antd';
import { AiTwotoneRightCircle } from 'react-icons/ai'

const { Step } = Steps;


const AboutTitle = styled("h1")`
  margin-bottom: 0.25em;
    font-family: 'Inter var', sans-serif;

`



const BlogTitle = styled("h3")`
  margin-bottom: 2em;
    font-family: 'Inter var', sans-serif;

  text-align: center;
`
const TimelineTitle = styled("h4")`
  margin-left: 1em;
  margin-right: 1em;
  
  font-weight: bold;
  font-family: 'Inter var', sans-serif;
  font-size: 20px;
`

const TimelineContent = styled("h6")`
    margin-left: 20px;
  margin-right: 20px;
  font-family: 'Inter var', sans-serif;
  font-size:16px;
`



const RenderBody = ({ meta }) => (
	<>
		<Helmet
			title={`Join | Speaker Series: India@Berkeley`}
			titleTemplate={`%s | Join | Speaker Series: India@Berkeley`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: `Join | Speaker Series: India@Berkeley`,
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
		<AboutTitle>Join</AboutTitle>
		<BlogTitle>Recruitment Timeline</BlogTitle>

		<Timeline mode={"alternate"}>

			<Timeline.Item dot={<AiTwotoneRightCircle style={{ fontSize: 16, color: "black" }} />}>
				<TimelineTitle>breuiveuir</TimelineTitle>
				<TimelineContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
			</Timeline.Item>

			<Timeline.Item dot={<AiTwotoneRightCircle style={{ fontSize: 16, color: "black" }} />}>
				<TimelineTitle>breuiveuir</TimelineTitle>
				<TimelineContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
			</Timeline.Item>

			<Timeline.Item dot={<AiTwotoneRightCircle style={{ fontSize: 16, color: "black" }} />}>
				<TimelineTitle>breuiveuir</TimelineTitle>
				<TimelineContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
			</Timeline.Item>

			<Timeline.Item dot={<AiTwotoneRightCircle style={{ fontSize: 16, color: "black" }} />}>
				<TimelineTitle>breuiveuir</TimelineTitle>
				<TimelineContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
			</Timeline.Item>

			<Timeline.Item dot={<AiTwotoneRightCircle style={{ fontSize: 16, color: "black" }} />}>
				<TimelineTitle>breuiveuir</TimelineTitle>
				<TimelineContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
			</Timeline.Item>

		</Timeline>


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
