import React from 'react';
 
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link} from "react-router-dom";

class ControlledCarousel extends React.Component {
  render() {
    return (
        <Carousel>
            <div>
                <img src="http://3.bp.blogspot.com/-yrGteryMXmY/WGi1F7cdeTI/AAAAAAAAWdo/wJppF6rC-C4f_B8xEcblDxonhSovI4iwwCK4B/s1600/sawa%2Beritrean%2Bmilitary.jpg." />
                <Link to="/about" className="legend">About</Link>
            </div>
            <div>
                <img src="http://3.bp.blogspot.com/-yrGteryMXmY/WGi1F7cdeTI/AAAAAAAAWdo/wJppF6rC-C4f_B8xEcblDxonhSovI4iwwCK4B/s1600/sawa%2Beritrean%2Bmilitary.jpg." />
                <Link to="/project" className="legend">Project</Link>
            </div>
            <div>
                <img src="https://i2.wp.com/debirhan.com/wp-content/uploads/2017/07/Eriw.jpg?fit=500%2C211&ssl=1" />
                <Link to="/contact" className="legend">Contact</Link>
            </div>
        </Carousel>
    );
}
  // constructor(props, context) {
  //   super(props, context);

  //   this.handleSelect = this.handleSelect.bind(this);

  //   this.state = {
  //     index: 0,
  //     direction: null
  //   };
  // }

  // handleSelect(selectedIndex, e) {
  //   alert(`selected=${selectedIndex}, direction=${e.direction}`);
  //   this.setState({
  //     index: selectedIndex,
  //     direction: e.direction
  //   });
  // }

  // render() {
  //   const { index, direction } = this.state;

  //   return (
  //     <Carousel
  //       activeIndex={index}
  //       direction={direction}
  //       onSelect={this.handleSelect}
  //     >
  //       <CarouselItem>
  //         <img width={900} height={500} alt="900x500" src="http://3.bp.blogspot.com/-yrGteryMXmY/WGi1F7cdeTI/AAAAAAAAWdo/wJppF6rC-C4f_B8xEcblDxonhSovI4iwwCK4B/s1600/sawa%2Beritrean%2Bmilitary.jpg" />
  //         <CarouselCaption>
  //           <h3>First slide label</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //         </CarouselCaption>
  //       </CarouselItem>
  //       <CarouselItem>
  //         <img width={900} height={500} alt="900x500" src="http://3.bp.blogspot.com/-yrGteryMXmY/WGi1F7cdeTI/AAAAAAAAWdo/wJppF6rC-C4f_B8xEcblDxonhSovI4iwwCK4B/s1600/sawa%2Beritrean%2Bmilitary.jpg" />
  //         <CarouselCaption>
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //         </CarouselCaption>
  //       </CarouselItem>
  //       <CarouselItem>
  //         <img width={900} height={500} alt="900x500" src="http://3.bp.blogspot.com/-yrGteryMXmY/WGi1F7cdeTI/AAAAAAAAWdo/wJppF6rC-C4f_B8xEcblDxonhSovI4iwwCK4B/s1600/sawa%2Beritrean%2Bmilitary.jpg" />
  //         <CarouselCaption>
  //           <h3>Third slide label</h3>
  //           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  //         </CarouselCaption>
  //       </CarouselItem>
  //     </Carousel>
  //   );
  // }
}

export default ControlledCarousel;