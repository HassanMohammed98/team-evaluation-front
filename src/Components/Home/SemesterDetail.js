import React from "react";
import semesterStore from "../../stores/semesterStore";

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
    </div>
  );
};

export default SemesterDetail;
