import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import BackgroundSvg from '../images/background.svg'
import ShapesSvg from '../images/shapes.svg'
import BackgroundImage from 'gatsby-background-image'

const Shapes = () => <><ShapesSvg /></>
const Background = () => <><BackgroundSvg style={{ position: `absolute`, top: `0`}} /></>

export default () => (
  <div id="parent" class="background">
   <Background />
    <span id= "child" class="text">
     <p>paliyaana@gmail.com</p>
     <p>helsinki, finland</p>
     <div style={{ fontSize: `3em` }}>
     <Link to="/">back</Link>
     </div>
    </span>
    <span id= "shape" class="shapes">
      <Shapes />
    </span>
  </div>
)
