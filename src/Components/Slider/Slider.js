import React from "react";
import {Carousel} from "react-bootstrap";
import image1 from "../../images/im1.png";
import image2 from "../../images/im2.png";
import image3 from "../../images/im3.png";

const Slider = () => {
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>A Latest Game Database</h3>
            <p>Acces the details about upcoming games with powered by rawg.io api.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>The e-comm store</h3>
            <p>An e-commerce store that sells only verified hardware from partnership with trusted sellers only</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>A Community Platform</h3>
            <p>A Social media platform for sharing insights and news about upcoming events , meetups , competitive matches , etc.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider;