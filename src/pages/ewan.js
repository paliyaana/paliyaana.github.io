import React from "react"
import WeedSvg from '../images/weed.svg'

const Weed = () => <><WeedSvg /></>

export default () => (
  <div id="container">
    <span className="text" style = {{ marginLeft: 5 }} >
      <div style = {{ paddingTop: 5 }} className="what">
        <p style = {{ paddingTop: 5, marginTop: 0 }}>Sori Ewan vielä eilisestä. Hävettää vieläkin.</p>
      </div>
    </span>
    <span className="weed">
      <Weed />
    </span>
  </div>
)
