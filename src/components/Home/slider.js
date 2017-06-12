import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from '../../styles/slider.less'
export default class SimpleSlider extends Component { 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:true,
      arrows:false,
      lazyLoad:true
    }
      
    const { data } = this.props
      console.log('data********',data)
    return (
      <div className='fullSlide'>
        <Slider {...settings}>
          {
            data.map((item,index) => (<div key={index}><img src={item.url} /></div>))
          }
        </Slider>
      </div>
    )
  }
}

class SliderItem extends Component { 
  render() {
    return (
        <img src={this.props.url} />
    )
  }
}