import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Blogs from "./components/blogs/Blogs";

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [markTime, setMarkTime] = useState(0);

  const handleBookMarked = (blog) => {
    // console.log(blog);
    const newBookMarked = [...bookMarked, blog];
    setBookMarked(newBookMarked);
  };

  const handleMarkTime = (time) => {
    // console.log(time);
    const newTime = markTime+time;
    setMarkTime(newTime);
  };


  const blogsPromised = fetch("blogs.json").then((res) => res.json());
  return (
    <div className="p-5">
      {/* <h2 className="text-3xl">My Articales</h2> */}
      <Navbar></Navbar>

      <div className="w-full flex p-2">
        <div className="w-[70%]">
          <Suspense fallback={<p>Loading....</p>}>
            <Blogs
              handleBookMarked={handleBookMarked}
              handleMarkTime={handleMarkTime}
              blogsPromised={blogsPromised}
            ></Blogs>
          </Suspense>
        </div>
        <div className="w-[30%]">
          <h3 className="text-3xl">Reading time : {markTime}</h3>
          <h3 className="text-2xl">Bookmark count: {bookMarked.length}</h3>
          <div>
            {bookMarked.map((marked) => (
              <div className="p-5 shadow-2xl mt-3">{marked.title}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
