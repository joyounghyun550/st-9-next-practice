import React from "react";

type Blogs = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
  tags: [];
};

const Blogs = async () => {
  const blogs: Blogs[] = await fetch("http://localhost:4000/blogs", {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <div className="blog-container">
      <h1 className="blog-main-title">기술 블로그</h1>
      <div className="description-text">
        <p>
          SSR 페이지는 사용자 요청 시 마다 서버에서 데이터를 가져와서 페이지를
          렌더링하는 방식입니다.
        </p>
        <p>
          실시간 업데이트가 중요하고 검색엔진노출(SEO)이 중요한 경우 적절한
          렌더링 방식입니다.
        </p>
      </div>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-card-header">
              <h2 className="blog-title">{blog.title}</h2>
              <span className="blog-category">{blog.category}</span>
            </div>

            <p className="blog-content">{blog.content}</p>

            <div className="blog-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="blog-footer">
              <span className="blog-author">
                <i className="fas fa-user"></i> {blog.author}
              </span>
              <span className="blog-date">
                <i className="fas fa-calendar"></i>
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
