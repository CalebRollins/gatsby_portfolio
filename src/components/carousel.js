import React from 'react';


const ImageSlide = ({ image }) => {
    const styles = {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="slidecontainer">
        <img src={image} className="imageslide" style={styles}></img>
      </div>
    );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slidearrow ${direction}` }
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
    const pips = this.props.images.map(
      (elem, index) => index == this.state.currentImageIndex ? "|" : "-"  
    )
    return (
        <div className="carousel">
          <ImageSlide image={this.props.images[this.state.currentImageIndex]} />
          <div className="pad"/>
          <div className="slidecontrols">
            <Arrow
              direction="left"
              clickFunction={ this.previousSlide }
              glyph="&#9664;" />
            { pips.map(x => <div className ="slidepip">{x}</div>) }

            <Arrow
              direction="right"
              clickFunction={ this.nextSlide }
              glyph="&#9654;" />
          </div>
          <div className="imageslidecaption">{this.props.captions[this.state.currentImageIndex]}</div>
        </div>
    )
  }
}
export default Carousel;