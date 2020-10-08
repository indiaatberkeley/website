import React from "react";
import Moment from 'react-moment';
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import PropTypes from "prop-types";
import dimensions from "styles/dimensions";
import Modal from 'react-awesome-modal';
import Button from "components/_ui/Button";


const PostCardContainer = styled("a")`
	border: 1px solid ${colors.grey200};
	
    border-radius: 3px;
    text-decoration: none;
    color: currentColor;
    display: flex;
	flex-direction: column;
	align-self: baseline;
	
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    transition: all 150ms ease-in-out;

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;
        cursor: pointer;

		.PostDescription{
			color: black;
		}

		.PostImage::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
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

const PostTitle = styled("h3")`
    margin-bottom: 0.5em;
	margin-top: 0.5em;
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
     background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
    padding-left: 0em;
	padding-right: 0em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 300px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 400px;
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }

`

const PostDescription = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
	min-height: 6em;

	
    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }

   /* p:last-of-type {
        margin: 0;
	}
	*/



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

const ModalContent = styled("div")`
	padding: 3em 3em 3em 3em;
	display:flex;
	flex-direction: row;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
   flex-direction: column-reverse;
   padding: 2.75em 2em 2em 2em;
  }
`

const PostContent = styled('div')`
	padding: 2em 2.5em 2em 2.5em;
	height: 100%;
	
	@media(max-width:950px) {
        padding: 2em 2.5em 2em 2.5em;
	}
	
`

const ModalImage = styled('div')`
display: flex;
flex-direction: column;
align-self: center;

	
	@media (min-width: ${dimensions.maxwidthTablet}px) {
   
   width: 50%;
  }
`

const ModalText = styled('div')`
width: 50%; 
padding-right: 1em;
	@media (max-width: ${dimensions.maxwidthTablet}px) {
   width: 100%;
   max-height: 50%;
   margin-top: 1.5em;
  }
`

const ModalImageTag = styled('img')`
max-width: 100%;
	@media (max-width: ${dimensions.maxwidthTablet}px) {
   height: 34vh;
  }
`

const PostCard = ({ category, title, description, thumbnail, uid, date }) => (
	<PostCardContainer className="BlogPostCard" target="_blank">

		<PostImage className="PostImage">
			<img src={thumbnail.url} alt={title[0].text} />

		</PostImage>
		<PostContent>
			<PostCategory>
				{category[0].text}
			</PostCategory>
			<PostTitle>
				{title[0].text}
			</PostTitle>
			<PostDescription>
				{RichText.render(description)}
			</PostDescription>
			<PostCardAction className="PostCardAction">
				See more <span>&#8594;</span>
			</PostCardAction>
			<PostMetas>
				<PostDate>
					<Moment format="MMMM D, YYYY">{date}</Moment>
				</PostDate>
			</PostMetas>
		</PostContent>


	</PostCardContainer>
)



class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
	}


	openModal() {
		this.setState({
			visible: true
		});
	}

	closeModal() {
		this.setState({
			visible: false
		});
	}

	render() {

		const { category, title, description, thumbnail, uid, body, register, linktext, linkurl, date } = this.props

		return (
			<div>
				<PostCardContainer className="BlogPostCard" onClick={() => this.openModal()}>

					<PostImage className="PostImage">
						<img src={thumbnail.url} alt={title[0].text} />

					</PostImage>
					<PostContent>
						<PostCategory>
							{category[0].text}
						</PostCategory>
						<PostTitle>
							{title[0].text}
						</PostTitle>
						<PostDescription className="PostDescription">
							{RichText.render(description)}
						</PostDescription>
						<PostCardAction className="PostCardAction">
							See more <span>&#8594;</span>
						</PostCardAction>
						<PostMetas>
							<PostDate>
								<Moment format="MMMM D, YYYY">{date}</Moment>
							</PostDate>
						</PostMetas>
					</PostContent>


				</PostCardContainer>

				<Modal
					visible={this.state.visible}
					width="80%"
					height="98%"
					effect="fadeInUp"
					onClickAway={() => this.closeModal()}>
					<ModalContent>
						<ModalText>
							<PostCategory>
								{category[0].text}
							</PostCategory>
							<PostTitle>{title[0].text}</PostTitle>
							<PostDescription>{RichText.render(body)}</PostDescription>

							<PostMetas>
								<PostDate>
									<Moment format="MMMM D, YYYY">{date}</Moment>
								</PostDate>
							</PostMetas>
						</ModalText>
						<ModalImage>
							<ModalImageTag src={thumbnail.url} alt={title[0].text} />
							<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5em' }}>
								<a href={register[0].text} target="_blank" style={{ width: '47%' }}>
									<Button className="Button--secondary" style={{ width: "100%" }}>
										Register
								</Button>
								</a>
								<a href={linkurl[0].text} target="_blank" style={{ width: "47% " }}>
									< Button className="Button--secondary" style={{ width: "100%" }} >
										{linktext[0].text}
									</Button>
								</a>
							</div>
						</ModalImage>

					</ModalContent>

				</Modal>

			</div >
		)
	}
}

export default MyComponent



PostCard.propTypes = {
	title: PropTypes.array.isRequired,
	description: PropTypes.array.isRequired,
	uid: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired
}
