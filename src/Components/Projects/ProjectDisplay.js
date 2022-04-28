import React from "react";

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-info">
        <h6>Project</h6>
        <h4>
          {project.name} - {project.weight}%
        </h4>
        <div className="project-card-info-bottom">
          <h6>Edit Weight</h6>
          <div className="outline-button v"></div>
          <h6>Edit Criteria</h6>
          <div className="outline-button v"></div>
          <h6>Edit Teams List</h6>
        </div>
      </div>
      <div className="outline-button v"></div>
      <div className="project-card-about">
        <h6>View Reports</h6>
      </div>
    </div>
  );
};

export default ProjectDisplay;
