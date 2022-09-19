import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogDetails() {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog._id === blogId)
  );

  return (
    <div>
      {blog ? (
        <>
          <p>{blog._id}</p>
          <p>{blog.title}</p>
          <p>{blog.content}</p>

          <p>{blog.author}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default BlogDetails;
