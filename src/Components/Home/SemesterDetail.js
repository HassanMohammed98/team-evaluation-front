import React from "react";
import semesterStore from "../../stores/semesterStore";
import ProjectsList from "../Projects/ProjectsList";

const SemesterDetail = ({ slug }) => {
  let Semester;
  if (slug) {
    Semester = semesterStore.semesters.find(
      (semester) => semester.id === +slug
    );
  } else {
    Semester = semesterStore.semesters[0];
  }
  return (
    <div className="semester-detail">
      <h3>
        {Semester.semester} {Semester.year}
      </h3>
      <ProjectsList Semester={Semester} />
    </div>
  );
};

export default SemesterDetail;
