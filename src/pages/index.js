import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`white`}
        >
          <div style={{ color: `lightcyan` }}>
          <br/>
          <h2>polina.business</h2>
          </div>
          <p>welcome to my website</p>
          <Link to="/contact/">contact</Link>
          <br/>
          <br/><br/>
          <br/><br/>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: auto;
`

export default StyledBackgroundSection


//export default () => <div>Hello world!</div>
