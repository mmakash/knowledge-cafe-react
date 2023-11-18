import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import Blog from "./Blog";

const Card = () => {
  const [cards, setCard] = useState([]);
  const [selectBlog, setSelectBlog] = useState([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("/FakeDB/data.json");
      const data = await response.json();
      setCard(data);
    })();
  }, []);

  const handleBlog = (blogData) => {
    setSelectBlog((prevBlogs) => [...prevBlogs, blogData]);
  };

  const handleMarkAsRead = (data) => {
    setReadTime(readTime + data.read_time);
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card) => (
          <div key={card.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={card["blog-cover-img"]} alt="Cover-image" />
            </figure>
            <div className="card-body">
              <div className="flex space-x-16">
                <div className="flex space-x-2">
                  <img className="w-10" src={card["blog-author-img"]} alt="" />
                  <div>
                    <div>
                      <h3>{card.author_name}</h3>
                      <p>{card.publish_date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-0">
                    <p>{card.read_time} Minutes Read</p>
                    <button onClick={() => handleBlog(card)}>
                      <CiBookmark />
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="card-title">{card.blog_title}</h2>
              <div>
                <button onClick={() => handleMarkAsRead(card)} className="underline text-blue-500" href="">
                  Mark As Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Blog selectBlog={selectBlog} readTime={readTime}/>
    </div>
  );
};

export default Card;