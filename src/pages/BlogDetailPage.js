import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import BlogDetail from "../sections/blog/BlogDetail";
import { blogsData } from "../data/blogsData";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the blog post by slug
  const blog = blogsData.blogs.find((b) => b.slug === slug);

  // If blog not found
  if (!blog) {
    return (
      <Container className="py-5 text-center">
        <h2>Blog post not found</h2>
        <p className="text-muted">
          The blog post you're looking for doesn't exist.
        </p>
        <Button variant="primary" onClick={() => navigate("/blogs")}>
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* Back Button */}
      <Container className="py-4">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => navigate("/blogs")}
          className="d-flex align-items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Button>
      </Container>

      {/* Blog Content */}
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <BlogDetail blog={blog} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetailPage;
