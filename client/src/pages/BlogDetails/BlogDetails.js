import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../Blogs/components/Banner";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./blogDetails.css";

function BlogDetails() {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog._id === blogId)
  );

  return (
    <div>
      <Banner />
      {blog ? (
        <div className="blog">
          <div className="blogDetails">
            <h1 className="title">{blog.title}</h1>
            <p className="author">
              <PersonOutlineIcon /> author: {blog.author}
            </p>
            <h2 className="content">{blog.content}</h2>
            <div className="rating">
              <ThumbUpOffAltIcon fontSize="large" /> <h2>8</h2>
              <ThumbDownOffAltIcon
                fontSize="large"
                style={{ marginLeft: "8px" }}
              />{" "}
              <h2>4</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BlogDetails;
