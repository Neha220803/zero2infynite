import React, { useState, useEffect } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import "./indi-course-table.css";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses";
import { compTIACourses } from "../../../data/compTIACourses";
import { isacaCourses } from "../../../data/isacaCourses";

const IndiCourseTableComp = ({ courseType }) => {
  const [batchSchedules, setBatchSchedules] = useState([]);

  // Get course data based on courseType prop
  const courseData =
    ecCouncilCourses[courseType] ||
    compTIACourses[courseType] ||
    isacaCourses[courseType];
  const batchData = courseData.batchSchedule;

  // Check if Actions column should be displayed
  const showActionsColumn = courseType === "CEH";

  useEffect(() => {
    const updateBatchDates = () => {
      const today = new Date();
      const updatedSchedules = batchData.batchTemplates.map((batch) => {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + batch.dayOffset);
        return {
          ...batch,
          date: newDate.toLocaleDateString("en-GB"),
        };
      });
      setBatchSchedules(updatedSchedules);
    };

    updateBatchDates();

    // Set up interval for automatic updates
    const interval = setInterval(updateBatchDates, batchData.updateInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [batchData]);

  // Handler functions for button clicks
  const handleCourseFees = (batchId) => {
    console.log(`Course fees clicked for batch ${batchId}`);
    // Add your course fees logic here
  };

  const handleCheckAvailability = (batchId) => {
    console.log(`Check availability clicked for batch ${batchId}`);
    // Add your availability check logic here
  };

  const handleCustomBatch = () => {
    console.log("Custom batch request clicked");
    // Add your custom batch logic here
  };

  const handleRequestBatch = () => {
    console.log("Request batch clicked");
    // Add your request batch logic here
  };

  return (
    <Container id="batches" className="indi-course-table-container">
      <Row>
        <h2 className="indi-section-title">{batchData.title}</h2>
      </Row>

      <Row>
        <p className="indi-course-description">{batchData.description}</p>
      </Row>

      <Row>
        <div className="batch-schedule-table">
          <Table hover responsive className="batch-table">
            <thead>
              <tr>
                {batchData.tableHeaders.map((header, index) => {
                  // Skip rendering Actions column if courseType is not CEH
                  if (header === "Actions" && !showActionsColumn) {
                    return null;
                  }
                  return (
                    <th key={index} colSpan={header === "Actions" ? 2 : 1}>
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {batchSchedules.map((batch) => (
                <tr key={batch.id}>
                  <td>{batch.date}</td>
                  <td>{batch.type}</td>
                  <td>{batch.days}</td>
                  {showActionsColumn && (
                    <>
                      <td>
                        <Button
                          variant={batchData.actionButtons.courseFees.variant}
                          size="sm"
                          className={
                            batchData.actionButtons.courseFees.className
                          }
                          onClick={() => handleCourseFees(batch.id)}
                        >
                          {batchData.actionButtons.courseFees.text}
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant={
                            batchData.actionButtons.checkAvailability.variant
                          }
                          size="sm"
                          className={
                            batchData.actionButtons.checkAvailability.className
                          }
                          onClick={() => handleCheckAvailability(batch.id)}
                        >
                          {batchData.actionButtons.checkAvailability.text}
                        </Button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>

      <Row className="mt-4 mb-3">
        <Col className="d-flex justify-content-center gap-3">
          <Button
            variant={batchData.bottomActions.customBatch.variant}
            className={batchData.bottomActions.customBatch.className}
            onClick={handleCustomBatch}
          >
            {batchData.bottomActions.customBatch.text}
          </Button>
          <Button
            variant={batchData.bottomActions.requestBatch.variant}
            className={batchData.bottomActions.requestBatch.className}
            onClick={handleRequestBatch}
          >
            {batchData.bottomActions.requestBatch.text}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IndiCourseTableComp;
