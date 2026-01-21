import React from "react";
import CodeBlock from "../../components/blog/CodeBlock";
import "./BlogDetail.css";

const BlogDetail = ({ blog }) => {
  // Render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        const HeadingTag = `h${item.level}`;
        return (
          <HeadingTag key={index} className="blog-heading">
            {item.text}
          </HeadingTag>
        );

      case "paragraph":
        return (
          <p key={index} className="blog-paragraph">
            {item.text}
          </p>
        );

      case "image":
        return (
          <div key={index} className="blog-image-wrapper">
            <img
              src={item.src}
              alt={item.alt || "Blog image"}
              className="blog-image"
            />
            {item.alt && <p className="image-caption text-muted">{item.alt}</p>}
          </div>
        );

      case "code":
        return (
          <CodeBlock key={index} code={item.text} language={item.language} />
        );

      case "list":
        return (
          <ul key={index} className="blog-list">
            {item.items.map((listItem, i) => (
              <li key={i} className="blog-list-item">
                {listItem}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <article className="blog-detail">
      {/* Category Badge */}
      <div className="mb-3">
        <span className="category-badge-detail">{blog.category}</span>
      </div>

      {/* Title */}
      <h1 className="blog-title">{blog.title}</h1>

      {/* Meta Information */}
      <div className="blog-meta">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <span className="author-name-detail">{blog.author}</span>
          <span className="meta-separator">•</span>
          <span className="publish-date-detail">{blog.publishDate}</span>
          <span className="meta-separator">•</span>
          <span className="read-time-detail">{blog.readTime}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="blog-divider" />

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="featured-image-wrapper mb-5">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="featured-image"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="blog-content">
        {blog.content.map((item, index) => renderContent(item, index))}
      </div>

      {/* Footer */}
      <div className="blog-footer mt-5 pt-4">
        <hr className="blog-divider mb-4" />
        <div className="text-center">
          <p className="text-muted mb-2">Written by</p>
          <h5 className="text-primary mb-0">{blog.author}</h5>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
