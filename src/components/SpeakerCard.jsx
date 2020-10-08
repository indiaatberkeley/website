import React from "react"
import Moment from "react-moment"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"
import { Modal, Button } from "flwww"

const PostCardContainer = styled("a")`
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
	state = {
		modalIsVisible: false,
	
	}

	toggleModal = () => {
		this.setState(prevState => ({
			modalIsVisible: !prevState.modalIsVisible,
		}))
	}

	render() {
		const { modalIsVisible } = this.state
		
		const { date, title, description } = this.props

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

				<Modal isVisible={modalIsVisible} width="1100" toggleModal={this.toggleModal}>
					<h3>{title[0].text}</h3>
					<p>Aute quem fore labore dolor noster quorum quid summis quae anim anim cillum dolor labore tempor culpa anim enim velit</p>
					<p>Minim culpa quae eram tamen magna aliqua sint veniam fore quis tempor export
									aliqua summis quem summis aliqua dolore export sint tempor malis elit quae</p>

					<p>eram quis fore sunt quorum malis quae quem export aliqua dolore magna minim quid
					nulla noster summis tamen illum noster amet sint export aliqua fugiat nisi amet
					duis culpa quis magna quis irure veniam cillum ipsum ipsum velit minim fore elit
					velit summis sunt fore fugiat ipsum sunt minim export sunt nulla sint sint
					labore veniam fugiat export tamen aliqua cillum multos elit amet dolor magna
					aliqua sint dolor aute noster veniam amet aute quis magna velit aliqua quis aute
					summis sunt duis culpa export sunt anim illum quem veniam quorum illum quem
					noster veniam quis culpa cillum tamen velit aliqua dolor legam noster quis minim
					malis amet minim noster sint nulla sunt tempor fore ipsum culpa legam quorum
					fore quem summis veniam fugiat aliqua duis amet nisi quis aliqua aliqua sint
					dolore enim summis culpa quorum aliqua sint culpa quis eram magna cillum fore
					export duis illum nisi multos export noster esse sunt malis aute enim sint magna
					aliqua dolore quae irure anim quem eram sunt aliqua dolor labore minim quis nisi
					illum culpa summis magna anim legam eram culpa esse elit veniam amet malis
					fugiat irure minim duis tamen quorum fore aute elit nulla veniam veniam quid
					illum cillum summis tamen export fore quae sunt labore sint sunt enim elit quid
					aute dolor cillum sint minim ipsum summis enim quem aliqua magna nisi quorum
					tamen quae esse export summis minim magna eram ipsum veniam culpa legam quem
					enim labore quae fugiat cillum quis velit noster multos irure cillum multos
					aliqua ipsum duis sint ipsum culpa dolor tamen amet elit velit nisi ipsum quorum
					tempor illum multos quorum multos velit quorum aliqua dolore nulla fugiat anim
					anim anim legam velit noster quid quae quae noster aliqua esse noster legam
									legam veniam fugiat fugiat sunt sint quem legam tempor elit</p>
					<Button onClick={this.toggleModal} type="primary">
						Continue</Button>
				</Modal>
			</div>
		)
	}
}

export default MyComponent
