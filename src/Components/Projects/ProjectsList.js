import React from "react";
import projectStore from "../../stores/projectStore";
import ProjectDisplay from "./ProjectDisplay";

const ProjectsList = ({ Semester }) => {
  const projects = projectStore.projects
    .filter((foundprojects) => foundprojects.semester === Semester.id)
    .map((project) => (
      <div className="outline-button project-item" key={project.id}>
        <ProjectDisplay project={project} />
      </div>
    ));

  console.log(projects);
  return projects;
};

export default ProjectsList;
