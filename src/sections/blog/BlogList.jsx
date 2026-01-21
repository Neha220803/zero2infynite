import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogCard from "../../components/cards/BlogCard";
import { blogsData } from "../../data/blogsData";
import "./BlogList.css";

const BlogList = () => {
  const { blogs } = blogsData;

  // Group blogs by category
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="blog-list">
      {/* Featured Post - Latest Blog */}
      {blogs.length > 0 && (
        <div className="mb-5">
          <h2 className="text-secondary mb-4">Latest Article</h2>
          <Row>
            <Col lg={12}>
              <BlogCard blog={blogs[0]} featured={true} />
            </Col>
          </Row>
        </div>
      )}

      {/* All Posts by Category */}
      {categories.map((category) => {
        const categoryBlogs = blogs.filter(
          (blog) => blog.category === category
        );

        return (
          <div key={category} className="mb-5">
            <h3 className="category-title text-primary mb-4">{category}</h3>
            <Row>
              {categoryBlogs.map((blog) => (
                <Col key={blog.id} lg={4} md={6} className="mb-4">
                  <BlogCard blog={blog} />
                </Col>
              ))}
            </Row>
          </div>
        );
      })}

      {/* If no blogs */}
      {blogs.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No blog posts available yet.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
