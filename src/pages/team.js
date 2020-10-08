import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import PostCard from "components/PostCard"

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
`

const BlogGrid = styled("div")`
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

const Blog = ({ posts, meta }) => (
	<>
		<Helmet
			title={`Our Team | Speaker Series: India@Berkeley`}
			titleTemplate={`%s | Our Team | Speaker Series: India@Berkeley`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: `Our Team | Speaker Series: India@Berkeley`,
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
		<Layout>
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
		</Layout>
	</>
)

export default ({ data }) => {
	const posts = data.prismic.allPosts.edges
	const meta = data.site.siteMetadata
	if (!posts) return null

	return <Blog posts={posts} meta={meta} />
}

Blog.propTypes = {
	posts: PropTypes.array.isRequired,
	meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
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
