import React from "react"
import Moment from "react-moment"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"
import { Modal, Button } from "flwww"

const PostCardContainer = styled(Link)`
  border: 1px solid ${colors.grey200};
  padding: 3em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;
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

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
`

const PostMetas = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostDate = styled("div")`
  margin: 0;
`

const PostDescription = styled("div")`
  margin-top: 2em;
  margin-bottom: 4em;
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

class MyComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { modalIsVisible: false }
	}

	toggleModal = () => {
		this.setState((prevState) => ({
			modalIsVisible: !prevState.modalIsVisible,
		}))
	}

	render() {
		const { modalIsVisible } = this.state

		const { date, title, description, uid } = this.props
		return (
			<div>
				<PostCardContainer onClick={this.toggleModal}>
					<PostTitle>{title[0].text}</PostTitle>
					<PostDescription>{RichText.render(description)}</PostDescription>
					<PostCardAction className="PostCardAction">
						Read more <span>&#8594;</span>
					</PostCardAction>
					<PostMetas>
						<PostDate>
							<Moment format="MMMM D, YYYY">{date}</Moment>
						</PostDate>
					</PostMetas>
				</PostCardContainer>
				<Modal isVisible={modalIsVisible} toggleModal={this.toggleModal}>
					<h3>Put anything you want inside!</h3>

					<Button onClick={this.toggleModal} type="primary">
						Continue
          </Button>
				</Modal>
			</div>
		)
	}
}

export default MyComponent

MyComponent.propTypes = {
	author: PropTypes.string.isRequired,
	category: PropTypes.array.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.array.isRequired,
	description: PropTypes.array.isRequired,
	uid: PropTypes.string.isRequired,
}
