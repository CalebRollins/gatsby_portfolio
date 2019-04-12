import React from 'react';


const ImageSlide = ({ image }) => {
    const styles = {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <img src={image} className="image-slide" style={styles}></img>
    );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }
  
  render () {
      return (
          <div className="carousel">
            <Arrow
              direction="left"
              clickFunction={ this.previousSlide }
              glyph="&#9664;" />

            <ImageSlide image={this.props.images[this.state.currentImageIndex]} />

            <Arrow
              direction="right"
              clickFunction={ this.nextSlide }
              glyph="&#9654;" />
            
          </div>
      )
  }
}
export default Carousel;