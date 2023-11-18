/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const Blog = ({ selectBlog }) => {
  const [totalReadTime,setTotalReadTime] = useState(0);
  useEffect(() => {
    const sum = selectBlog.reduce((total, blog) => total + blog.read_time, 0);
    setTotalReadTime(sum);
  },[selectBlog])
  return (
    <div>
      <h1 className="text-3xl font-bold m-3">Total Read Time: {totalReadTime}</h1>
      <div className="overflow-x-auto">
        <table className="table w-2/3 my-8 bg-stone-400">
          <thead>
            <h2 className="text-3xl font-bold m-3">
              BookMarked Blog:{selectBlog.length}
            </h2>
          </thead>
          <tbody className="p-3">
            {selectBlog?.map((blog, index) => {
              return (
                <tr className="hover font-extrabold text-3xl" key={index}>
                  {blog.blog_title}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
