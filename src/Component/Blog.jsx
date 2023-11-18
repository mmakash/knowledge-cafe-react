/* eslint-disable react/prop-types */

const Blog = ({ selectBlog,readTime }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-3">Total Read Time: {readTime}</h1>
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
