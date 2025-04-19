import React, { useState, useEffect } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import "./indi-course-table.css";

const IndiCourseTableComp = () => {
  const initialBatchSchedules = [
    { type: "Weekend", days: "Saturday(Saturday - Sunday )", id: 1 },
    { type: "Weekdays", days: "Monday (Monday - Friday)", id: 2 },
    { type: "Weekdays", days: "Thursday (Monday - Friday)", id: 3 },
    { type: "Weekend", days: "Saturday (Saturday - Sunday)", id: 4 },
  ];

  const [batchSchedules, setBatchSchedules] = useState([]);

  useEffect(() => {
    const updateBatchDates = () => {
      const today = new Date();
      const updatedSchedules = initialBatchSchedules.map((batch, index) => {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + index * 2);
        return { ...batch, date: newDate.toLocaleDateString("en-GB") };
      });
      setBatchSchedules(updatedSchedules);
    };

    updateBatchDates();
    const interval = setInterval(updateBatchDates, 2 * 24 * 60 * 60 * 1000); // Update every 2 days

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Container>
      <Row>
        <h2 className="indi-section-title">
          Upcoming Batches Schedule for Certified Ethical Hacking Training in
          Chennai
        </h2>
      </Row>
      <Row>
        <p className="indi-course-description">
          Zero2infinite provides flexible timings to all our students. Here are
          the Cyber Security training classes in Chennai schedule in our
          branches. If this schedule doesn't match please let us know. We will
          try to arrange appropriate timing based on your flexible timings.
        </p>
      </Row>
      <Row>
        <div className="batch-schedule-table">
          <Table hover responsive className="batch-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Mode</th>
                <th>Days</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batchSchedules.map((batch) => (
                <tr key={batch.id}>
                  <td>{batch.date}</td>
                  <td>{batch.type}</td>
                  <td>{batch.days}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="course-fees-btn"
                    >
                      Course Fees
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      className="check-availability-btn"
                    >
                      Check Availability
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
      <Row className="mt-4 mb-3">
        <Col className="d-flex justify-content-center gap-3">
          <Button variant="outline-primary" className="batch-action-btn">
            Can't find a batch you were looking for?
          </Button>
          <Button variant="primary" className="batch-action-btn">
            Request Custom Batch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IndiCourseTableComp;
