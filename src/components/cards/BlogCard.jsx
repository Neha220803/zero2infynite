import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog, featured = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blog.slug}`);
  };

  return (
    <Card
      className={`blog-card h-100 ${featured ? "featured-card" : ""}`}
      onClick={handleClick}
    >
      {/* Featured Image */}
      <div className="blog-card-image-wrapper">
        <Card.Img
          variant="top"
          src={blog.featuredImage}
          alt={blog.title}
          className="blog-card-image"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="category-badge">{blog.category}</span>
        </div>

        {/* Title */}
        <Card.Title className={`blog-card-title ${featured ? "h2" : "h5"}`}>
          {blog.title}
        </Card.Title>

        {/* Excerpt */}
        <Card.Text className="blog-card-excerpt text-muted mb-3">
          {blog.excerpt}
        </Card.Text>

        {/* Meta Info */}
        <div className="blog-card-meta mt-auto">
          <div className="d-flex align-items-center justify-content-between">
            <div className="author-info">
              <span className="author-name text-secondary fw-semibold">
                {blog.author}
              </span>
            </div>
            <div className="blog-meta-right">
              <span className="read-time text-muted">{blog.readTime}</span>
            </div>
          </div>
          <div className="publish-date text-muted mt-1">{blog.publishDate}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
