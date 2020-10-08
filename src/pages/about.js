import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PostCard from "components/PostCard"

const AboutTitle = styled("h1")`
  margin-bottom: 0.25em;
    font-family: 'Inter var', sans-serif;

`

const Section = styled("div")`
  margin-bottom: 10em;
    font-family: 'Inter var', sans-serif;

  display: flex;
  flex-direction: column;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
    font-family: 'Inter var', sans-serif;

`

const BlogGrid = styled("div")`
  font-family: 'Inter var', sans-serif;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const RenderBody = ({ home, projects, meta }) => (
	<>
		<Helmet
			title={`About | Speaker Series: India@Berkeley`}
			titleTemplate={`%s | About | Speaker Series: India@Berkeley`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: `About | Speaker Series: India@Berkeley`,
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

		<AboutTitle>About</AboutTitle>
		{RichText.render(home.about_title)}
		<About bio={home.about_bio} socialLinks={home.about_links} />
	</>
)

const Blog = ({ posts }) => (
	<>
		<BlogTitle>Our Team</BlogTitle>
		<BlogGrid>
			{posts.map((post, i) => (
				<PostCard
					key={i}
					title={post.node.post_title}
					date={post.node.post_date}
					description={post.node.post_preview_description}
					uid={post.node._meta.uid}
					image={post.node.post_hero_image}
					linkedin={post.node.linkedin}
				/>
			))}
		</BlogGrid>
	</>
)

export default ({ }) => {
	//Required check for no data being returned
	// const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
	// const projects = data.prismic.allProjects.edges
	// const meta = data.site.siteMetadata

	// const posts = data.prismic.allPosts.edges
	// if (!posts) return null

	// if (!doc || !projects) return null


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
`}
			render={data => (

				<Layout>
					<RenderBody home={data.prismic.allHomepages.edges.slice(0, 1).pop().node} projects={data.prismic.allProjects.edges} meta={data.site.siteMetadata} />
					<Blog posts={data.prismic.allPosts.edges} meta={data.site.siteMetadata} />
				</Layout>
			)}
		/>

	)
}

RenderBody.propTypes = {
	home: PropTypes.object.isRequired,
	projects: PropTypes.array.isRequired,
	meta: PropTypes.object.isRequired,
}
