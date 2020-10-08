import React from "react";
import Moment from 'react-moment';
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import PropTypes from "prop-types";

const PostCardContainer = styled("a")`
    border: 1px solid ${colors.grey200};
    padding: 0em 0em 2em 0em;
    border-radius: 3px;
    text-decoration: none;
    color: currentColor;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    transition: all 150ms ease-in-out;
  font-family: 'Inter var', sans-serif;

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;
        cursor: pointer;


		.PostDescription{
			color: black;
		}

        .PostCardAction {
            color: ${colors.blue500};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }
    }
`

const PostCategory = styled("h6")`
    font-weight: 600;
    color: ${colors.grey600};
`

const PostTitle = styled("h4")`
    margin: 0;
    margin-top: 1.5em;
	text-align: center;
	font-weight: 600;
`

const PostMetas = styled("div")`
    display: flex;
    align-items: center;
    margin-top: 1.5em;
    justify-content: space-between;
    font-size: 0.85em;
    color: ${colors.grey600};
`

const PostAuthor = styled("div")`
    margin: 0;
`

const PostDate = styled("div")`
    margin: 0;
`
const PostImage = styled("div")`
    margin: 0;

`

const PostDescription = styled("div")`
    margin-top: 0.5em;
    text-align: center;


    p:last-of-type {
        margin: 0;
    }
`

const PostCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const PostCard = ({ date, title, description, uid, image, linkedin }) => (
	<PostCardContainer className="BlogPostCard" href={linkedin[0].text} target="_blank">

		<PostImage>
			<img src={image.url} alt="team" width="100%" />
		</PostImage>
		<PostTitle>
			{title[0].text}
		</PostTitle>
		<PostDescription className="PostDescription">
			{RichText.render(description)}
		</PostDescription>


	</PostCardContainer>
)

export default PostCard;

PostCard.propTypes = {
	title: PropTypes.array.isRequired,
	description: PropTypes.array.isRequired,
	uid: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired
}
