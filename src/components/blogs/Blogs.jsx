import React, { use } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ blogsPromised }) => {
  const blogs = use(blogsPromised);
  console.log(blogs);
  return (
    <div>
      <h4 className="text-3xl">Total Blogs:{blogs.length}</h4>
      <div className="grid grid-cols-2 p-5 gap-5">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
