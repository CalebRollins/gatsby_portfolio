import React from 'react';
import Page from '../components/page.js';
import Project from '../components/project.js';

const ProjectsPage = () => 
  <>
    <Page>
      <h2>Projects</h2>
      <hr/>
      <Project 
        title = "BomoBugs"
        description = "An idle simulation game"
        images = {[
          require("../images/bomobugs_needs.gif"), 
          require("../images/bomobugs_mating.gif"), 
          require("../images/bomobugs_coins.gif"), 
          require("../images/bomobugs_pause.gif")]}
        captions = {[
          "BomoBugs have needs, inheritable traits, and can carry items.",
          "BomoBugs mate, and their children inherit their traits.",
          "Coins can either be passively collected by your BomoBugs or collected actively by clicking them.",
          "Snazzy pause menu."
        ]}
        links = {[
          { Download: "https://drive.google.com/uc?export=download&id=0B3awpsZxDZ3mZlFadHNwTk5tMjA" },
        ]}
      />
      <hr/>
      <Project 
        title = "Evol"
        description = "An experiment with fractals created with Unity and C#"
        images = {[ 
          require("../images/evol1.png"),
          require("../images/evol2.png"),
          require("../images/evol3.png"),
          require("../images/evol4.png")]}
        captions = {[
          "Each fractal has a set of genes.",
          "These genes dictate the fractals' coordinates, color, and other properties.",
          "In each \"generation\" a fractal will vary in one of its genes.",
          "Tada."
        ]}
        links = {[
          { GitHub: "https://github.com/CalebRollins/evol" },
          { Download: "https://drive.google.com/uc?export=download&id=0B3awpsZxDZ3mZlFadHNwTk5tMjA" },
          { Blog: "/blog/2016-09-26" },
        ]}
      />
    </Page>
  </>

export default ProjectsPage;