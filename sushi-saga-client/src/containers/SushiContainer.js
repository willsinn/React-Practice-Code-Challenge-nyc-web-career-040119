import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends Component {
  generateSushi = () => {
    const fourSushi = this.props.sushis.slice(0,4)
    return fourSushi.map(sushi => (
      <Sushi
        sId={sushi.id}
        name={sushi.name}
        imgUrl={sushi.img_url}
        price={sushi.price}
      />
    ))
  }
  render(){
    return(
      <div className="belt">
        <MoreButton />
        {this.generateSushi()}
      </div>

    );
  }
}

export default SushiContainer
