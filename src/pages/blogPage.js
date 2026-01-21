import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogList from "../sections/blog/BlogList";

const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold mb-3">Blogs</h1>
              <p className="lead mb-0">
                Insights, tutorials, and walkthroughs on cybersecurity, AI, and
                technology
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Blog List Section */}
      <Container className="py-5">
        <BlogList />
      </Container>
    </div>
  );
};

export default BlogPage;
