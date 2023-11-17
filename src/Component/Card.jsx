import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";

const Card = () => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/public/FakeDB/data.json");
      const data = await response.json();
      setCard(data);
    })();
  }, []);
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {cards.map((card) => {
        return (
          <div key={card.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={card["blog-cover-img"]}
                alt="Cover-image"
              />
            </figure>
            <div className="card-body">

              <div className="flex space-x-16">
              <div className="flex space-x-2">
                <img className="w-10" src={card["blog-author-img"]} alt="" />
                <div>
                    <h3>{card.author_name}</h3>
                    <p>{card.publish_date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-0">
              <p>{card.read_time} Minutes Read</p>
              <CiBookmark onClick={handleClick}/>
              </div>
              </div>
                <h2 className="card-title">{card.blog_title}</h2>
              <div>
                <a className="underline text-blue-500" href="">Mark As Read</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
