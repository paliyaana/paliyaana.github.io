import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import background_svg from '../images/background.svg'
import shapes_svg from '../images/shapes.svg'
import BackgroundImage from 'gatsby-background-image'

const Shapes = () => <><img src={shapes_svg} alt="shapes"/></>
const Background = () => <><img src={background_svg} alt="background" style={{ position: `absolute`, top: `0`}} /></>

export default () => (
  <div id="parent" class="background">
   <Background></Background>
    <span id= "child" class="text">
     <p>paliyaana@gmail.com</p>
     <p>helsinki, finland</p>
     <div style={{ fontSize: `3em` }}>
     <Link to="/" style={{fontWeight: `150`}}>back</Link>
     </div>
    </span>
    <span id= "shape" class="shapes">
    <Shapes></Shapes>
    </span>
  </div>
)
