import React, { useState } from "react";
import semesterStore from "../../../stores/semesterStore";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import OutlineButton from "../Buttons/OutlineButton";
import SemesterSelect from "../DropdownLists/SemesterSelect";

const SemesterAdd = () => {
  const [show, setShow] = useState(false);

  const [semester, setSemester] = useState({
    semester: "",
    year: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    console.log(event);
    setSemester({ ...semester, [event.target.name]: event.target.value });
  };
  const handleDropdown = (event) => {
    console.log(semester);
    setSemester({ ...semester, semester: event.target.innerText });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    semesterStore.addSemester(semester);
    setSemester({
      semester: "",
      year: 0,
    });
  };

  return (
    <>
      <div className="add-semester-btn-container">
        <OutlineButton title={"+ Semester"} action={handleShow} />
      </div>

      <Modal show={show} onHide={handleClose} onKeyPress={handleKeyPress}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new semester</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col xs={12} md={4}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Semester</Form.Label>
                    <SemesterSelect
                      semester={semester}
                      handleDropdown={handleDropdown}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="year"
                      type="number"
                      placeholder="Enter Year"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SemesterAdd;
