import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { StaticQuery, graphql } from "gatsby";
import 'styles/fonts.scss';
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import Header from "components/Header";
import Footer from "components/Footer";
import PropTypes from "prop-types";

const LayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }

    .Layout__content {
        padding-bottom: 5em;
    }
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
		render={data => (
			<LayoutContainer className="div">
				<Global styles={[globalStyles, typeStyles]} />
				<div className="Layout">
					<Header />
					<main className="Layout__content">
						{children}
					</main>
					<Footer />
				</div>
			</LayoutContainer>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
