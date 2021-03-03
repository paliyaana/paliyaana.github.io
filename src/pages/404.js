import React from "react"
import { Link } from "gatsby"
import BackgroundSvg from '../images/background.svg'
import ShapesSvg from '../images/shapes.svg'

const Shapes = () => <><ShapesSvg /></>
const Background = () => <><BackgroundSvg className="background-image" /></>

export default () => (
  <div id="container">
    <span className="background" style = {{ paddingTop: 0 }}>
      <Background />
    </span>
    <span className="text" style = {{ marginLeft: 5 }} >
      <div style = {{ paddingTop: 5 }} className="what">
        <p style = {{ paddingTop: 5, marginTop: 0 }}>This page does not exist.</p>
        <p style = {{ paddingTop: 25 }}><Link to="/">Please leave</Link></p>
        </div>
        </span>
        <span className="shapes">
          <Shapes />
        </span>
        </div>
      )
