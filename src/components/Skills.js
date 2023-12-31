import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png'
function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-box'>
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Computer Sciense</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image4" />
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>TailWind</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Redux/Toolkit</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>GITHUB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt='colorsharp' className='background-image-left' />

    </section>


  )
}

export default Skills