import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import yourSVG from '../images/shapes.svg'
import BackgroundImage from 'gatsby-background-image'

const Home = () => <><img src={yourSVG} alt="shapes"/></>

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
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
          <br/>
          <p>polina.business</p>
          <p>welcome to my website</p>
          <div style={{ fontSize: `3em` }}>
          <Link to="/contact/">contact</Link>
          </div>
          <Home>
          </Home>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection


//export default () => <div>Hello world!</div>
