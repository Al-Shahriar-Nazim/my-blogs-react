import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookMarked,handleMarkTime}) => {
  // console.log(handleBookMarked);
  const{title,cover,author,author_img}=blog;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={cover}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-around items-center">
            <h3>{author}</h3>
            <img src={author_img} alt="" className="w-16"/>
            <button onClick={()=>handleBookMarked(blog)}>
              <FaBookmark size={30} />
            </button>
            
          </div>
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex justify-around">
            {
              blog.hashtags.map(has=><b>#{has}</b>)

            }
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=>handleMarkTime(blog.reading_time ,blog.id)} className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
