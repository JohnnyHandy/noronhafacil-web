/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { css } from "@emotion/react"

import Header from "./header"
import Footer from './footer'
import "./layout.css"
import { phoneNumber, welcomeMessage } from '../utils/constants'

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`

const Layout = ({ children, height, headerHeight, allRefsObject, scrollToRef }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const whatsAppCss = css`
    position: fixed;
    width: 5vw;
    right: 5rem;
    border-radius: 50%;
    background: green;
    padding: 2.5vw;
    box-sizing: content-box;
    bottom: 2.5rem;
    cursor: pointer;
  `
  return (
    <>
      <Header headerHeight={headerHeight} scrollToRef={scrollToRef} allRefsObject={allRefsObject} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          style={{
            position: 'relative'
          }}
        >
          {children}
          <Link
            to={url}         
            target='_blank'
            css={whatsAppCss}
          >
            <StaticImage src={'../images/greenzap.svg'} />
          </Link>
        </main>
      <Footer sectionRef={allRefsObject.ContatosRef} />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
