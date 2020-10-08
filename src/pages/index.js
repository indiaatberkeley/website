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
import ProjectCard from "components/SpCa"
import SpeakerCard from "components/SpeakerPost"
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper"
import slide1 from "images/slide1.png"
import slide2 from "images/slide2.png"
import slide3 from "images/slide3.png"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

const Hero = styled("div")`
  padding-top: 0em;
  padding-bottom: 3em;
  margin-bottom: 4em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const SpeakerGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
    font-family: 'Inter var', sans-serif;


  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;
  font-family: 'Inter var', sans-serif;

margin-top: 4em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    
  }

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

const RenderBody = ({ home, projects, meta, posts }) => (
	<>
		<Helmet
			title={meta.title}
			titleTemplate={`%s | ${meta.title}`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: meta.title,
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
		<Hero>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}

			>
				<SwiperSlide>
					<img src={slide1} alt="slide1" width="100%" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="slide2" width="100%" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="slide3" width="100%" />
				</SwiperSlide>
			</Swiper>
		</Hero>

		<Section>
			<SpeakerGrid>
				{projects.map((project, i) => (
					<SpeakerCard
						key={i}
						category={project.node.project_category}
						title={project.node.project_title}
						description={project.node.project_preview_description}
						body={project.node.project_description}
						linkurl={project.node.project_linkurl}
						linktext={project.node.project_linktext}
						register={project.node.project_register}
						thumbnail={project.node.project_preview_thumbnail}
						uid={project.node._meta.uid}
						date={project.node.project_post_date}
					/>
				))}
			</SpeakerGrid>
			<WorkAction to={"/speakers"}>
				See more speakers <span>&#8594;</span>
			</WorkAction>
		</Section>
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
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
			project_category
			project_description
			project_linkurl
			project_linktext
			project_register
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
					<RenderBody
						home={data.prismic.allHomepages.edges.slice(0, 1).pop().node}
						projects={data.prismic.allProjects.edges}
						meta={data.site.siteMetadata}
						posts={data.prismic.allPosts.edges}
					/>
				</Layout>
			)}
		/>

	)
}

RenderBody.propTypes = {
	home: PropTypes.object.isRequired,
	projects: PropTypes.array.isRequired,
	meta: PropTypes.object.isRequired,
	posts: PropTypes.array.isRequired,
}
