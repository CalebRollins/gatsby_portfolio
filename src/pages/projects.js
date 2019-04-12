import React from 'react';
import Page from '../components/page.js';
import Project from '../components/project.js';
import gif from "../images/bomobugs_needs.gif"
import gif2 from "../images/bomobugs_mating.gif"
import gif3 from "../images/bomobugs_coins.gif"
import gif4 from "../images/bomobugs_pause.gif"

const gifs = [{gif,gif2,gif3,gif4}]
const ProjectsPage = () => 
  <>
    <Page>
      <Project 
        title = "BomoBugs"
        description = "An idle simulation game"
        images = {[gif, gif2, gif3, gif4]}
        imageNames = {["bomobugs_needs.gif", "bomobugs_mating.gif", "bomobugs_coins.gif", "bomobugs_pause.gif"]}
        >
      </Project>
      {/* <Project 
        title = "Evol"
        description = "An experiment with fractals created with Unity and C#"
        images = {[ {gif}, {gif2} ]}
        /> */}
    </Page>
  </>

export default ProjectsPage;