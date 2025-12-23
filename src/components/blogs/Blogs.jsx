import React, { use } from 'react';

const Blogs = ({blogsPromised}) => {
    const blogs = use(blogsPromised);
    console.log(blogs)
    return (
        <div>
            <h4>Blogs:{blogs.length}</h4>
        </div>
    );
};

export default Blogs;