import React from "react"
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
        <p style = {{ paddingTop: 5, marginTop: 0 }}>SELECT person</p>
        <p style = {{ paddingTop: 25 }}>FROM helsinki</p>
        <p style = {{ paddingTop : 25 }}>WHERE name = polina</p>
        <p style = {{ marginLeft : "1.2em" }} >
	       <p>AND email = paliyaana@gmail.com</p>
         <p>AND ig = @paliyaana</p>
         <p>AND art IN (missing,</p>
		        <p style = {{ marginLeft : "5em" }} >development,</p>
		        <p style = {{ marginLeft : "5em" }} >nonexistent)</p>
         </p>
      </div>
    </span>
    <span className="shapes">
      <Shapes />
    </span>
  </div>
)
