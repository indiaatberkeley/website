import React, { useState } from 'react';
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import { Drawer, Button } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';



const HeaderContainer = styled("div")`
  padding-top: 2em;
  padding-bottom: 3em;
    font-family: 'Inter var', sans-serif;

`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
    font-family: 'Inter var', sans-serif;

`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 3em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;
    font-family: 'Inter var', sans-serif;


@media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }


  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 1em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 10;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`
const HeaderLinksModal = styled("div")`
  display: grid;
  grid-template-row: repeat(5, auto);
    font-family: 'Inter var', sans-serif;

  grid-gap: 3em;
  justify-content: flex-center;
  width: 100%;
  max-width: 200px;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 1em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
	font-size: 0.95em;
	  font-family: 'Inter var', sans-serif;

    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 10;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`
const HeaderLinksLap = styled("div")`
@media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`


const ModalOpener = styled("div")`
@media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`


const Header = () => (
	<HeaderContainer>
		<HeaderContent>
			<Link to="/">
				<Logo />
			</Link>
			<HeaderLinks>
				<Link activeClassName="Link--is-active" to="/">
					Home
        </Link>
				<Link activeClassName="Link--is-active" to="/about">
					About
        </Link>
				<Link activeClassName="Link--is-active" to="/speakers">
					Speakers
        </Link>
				<Link activeClassName="Link--is-active" to="/join">
					Join
        </Link>
				<Link activeClassName="Link--is-active" to="/contact">
					Contact
        </Link>

			</HeaderLinks>
		</HeaderContent>
	</HeaderContainer >
)


const App = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<>


			<HeaderContainer>
				<HeaderContent >
					<Link to="/">
						<Logo />
					</Link>
					<HeaderLinks>
						<Link activeClassName="Link--is-active" to="/">
							Home
        </Link>
						<Link activeClassName="Link--is-active" to="/about">
							About
        </Link>
						<Link activeClassName="Link--is-active" to="/speakers">
							Speakers
        </Link>
						<Link activeClassName="Link--is-active" to="/join">
							Join
        </Link>
						<Link activeClassName="Link--is-active" to="/contact">
							Contact
        </Link>


					</HeaderLinks>
					<ModalOpener activeClassName="Link--is-active" onClick={showDrawer}>
						<AiOutlineMenu />
					</ModalOpener>

				</HeaderContent>
			</HeaderContainer >




			<Drawer
				placement="left"
				closable={false}
				onClose={onClose}
				visible={visible}
			><div >
					<div style={{ marginBottom: '1em', display: 'flex', justifyContent: 'center' }}>
						<Logo />
					</div>
					<h3 style={{ textAlign: 'center', marginBottom: '1em' }}>Speaker Series: India@Berkeley</h3>

					<HeaderLinksModal>
						<Link activeClassName="Link--is-active" to="/">
							Home
        </Link>
						<Link activeClassName="Link--is-active" to="/about">
							About
        </Link>
						<Link activeClassName="Link--is-active" to="/speakers">
							Speakers
        </Link>
						<Link activeClassName="Link--is-active" to="/join">
							Join
        </Link>
						<Link activeClassName="Link--is-active" to="/contact">
							Contact
        </Link>


					</HeaderLinksModal></div>
			</Drawer>
		</>
	);
};

export default App
