import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const SemesterSelect = ({ semester, handleDropdown }) => {
  const semesters = ["Fall", "Spring", "Summer"].map((semester) => (
    <Dropdown.Item as="h6" key={semester} onClick={handleDropdown}>
      {semester}
    </Dropdown.Item>
  ));
  return (
    <DropdownButton
      id="dropdown-item-button"
      title={
        semester.semester?.length > 0 ? `${semester.semester}` : "Select one"
      }
    >
      <Dropdown.ItemText>(Semester types)</Dropdown.ItemText>
      {semesters}
    </DropdownButton>
  );
};

export default SemesterSelect;
