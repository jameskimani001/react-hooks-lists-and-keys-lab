
import React from "react";
import ProjectItem from "./ProjectItem";
import './ProjectList.css'; 

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(function(project) {
        return (
          <ProjectItem 
            key={project.id} 
            name={project.name} 
            about={project.about} 
            technologies={project.technologies} 
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
