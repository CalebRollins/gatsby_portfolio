import React from 'react';
import Carousel from '../components/carousel'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

const ProjectButton = props => {
  const buttonStyle = { width: '7em', 'textTransform': 'lowercase', border: '1px solid #7a7b7c', margin: '-.5px', color:'black', 'borderRadius': '0 0 0 0' }
  return(
    <div>
      <Grid item style={{paddingTop: '1em', paddingBottom: '1em',}}>
        <Button
            target="_blank" href={props.relativeLink} partiallyActive={true}
            variant="outlined"
            size="medium"
            style={ buttonStyle }
        >
          {props.children}
        </Button> 
      </Grid>
    </div>)}

class Project extends React.Component {
  render () {
    return (
      <>
        <h3 style={{'marginBottom':'0'}}>{this.props.title}</h3>
        <em>{this.props.description}</em>
        <br/>
        <Carousel images = {this.props.images} captions = {this.props.captions} />
        <Grid className="projectbutton" container direction="row" justify="center" alignItems="center">
          {this.props.links.map(l => 
            <ProjectButton relativeLink={Object.values(l)}>
              {Object.keys(l)}
            </ProjectButton>)}
        </Grid>
      </>
    )
  }
}
export default Project;