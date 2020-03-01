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
  <div id="container">
    <Background />
    <span class="text">
     <div style={{ fontSize: `2.5em` }}>
     <Link to="/">POLINA.BUSINESS</Link>
     <p>/</p>
     <Link to="/art/">ART</Link>
     <p>/</p>
     <Link to="/contact/" align="right">CONTACT</Link>
     <p>/</p>
     </div>
     <p>There is no art.</p>
    </span>
    <span class="shapes">
      <Shapes />
    </span>
  </div>
)
