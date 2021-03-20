import React from "react"
import WeedSvg from '../images/weed.svg'

const Weed = () => <><WeedSvg /></>

export default () => (
  <div id="container" style = {{ marginTop: 0 }}>
  <span className="weed" >
    <Weed />
  </span>
    <span className="what" style = {{ marginLeft: 5 }} >
      <div style = {{ paddingTop: 0 }} className="ewan">
        <p style = {{ paddingTop: 0, marginTop: 0, marginLeft: 75 }}>Sori Ewan vielä eilisestä</p>
        <p style = {{ paddingTop: 0, marginTop: 0, marginLeft: 80 }}>ala-arvosesta heitosta.</p>
      </div>
    </span>
    <span className="weed" width="100px" height="100%" >
      <Weed />
    </span>
  </div>
)
