import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import BackgroundSvg from '../images/background.svg'
import ShapesSvg from '../images/shapes.svg'
import BackgroundImage from 'gatsby-background-image'

const Shapes = () => <><ShapesSvg /></>
const Background = () => <><BackgroundSvg class="background-image" /></>

export default () => (
  <div id="container">
    <span class="background" style = {{ paddingTop: 0 }}>
      <Background />
    </span>
    <span class="text" style = {{ marginLeft: 5 }} >
      <div style = {{ paddingTop: 5 }} class="what">
        <p style = {{ paddingTop: 5, marginTop: 0 }}>This page does not exist.</p>
        </div>
        </span>
        <span class="shapes">
          <Shapes />
        </span>
        </div>
      )
