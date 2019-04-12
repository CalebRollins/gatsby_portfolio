import React from 'react';
import Carousel from "../components/carousel"


const Project = props => 
  <>
    <h2>{props.title}</h2>
    <em>{props.description}</em>
    <br/>
    <Carousel imageNames={props.imageNames} images = {props.images}></Carousel>

    
  </>

export default Project;