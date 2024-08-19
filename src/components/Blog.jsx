import React from "react";
import { Button } from 'antd';
import blogData from "../data/blog";
import '../styles/References.css'

const displayedBlogs = blogData.slice(0, 4);

const BlogPost = ({ title, date, previewText, onClick }) => {
  return (
      <div 
          className="flex bg-gray-100 rounded-md shadow-md transform transition-transform hover:shadow-lg cursor-pointer max-w-5xl w-5/6 mx-auto" 
          onClick={onClick}
      >
          <div className="p-8 w-full flex flex-col justify-center">
              <h2 className="text-xl mb-4">{title}</h2>
              <p className="text-gray-600 mb-4">{date}</p>
              <p>{previewText}</p>
          </div>
      </div>
  );
};

const Blog = () => {

    const handleBlogClick = (link) => {
        window.open(link, "_blank")
    }

    return (
      <section id="blog" className="pt-12 pb-14 bg-gray-100">
        <div className="border-t-2 border-gray-300 my-8"></div>
        <div className="container mx-auto px-10">
          <h2 className="text-2xl text-center mb-8 mt-20">Blog</h2>
          <div className="grid grid-cols-1 gap-8">
            {displayedBlogs.map(blog => (
              <BlogPost 
                onClick={() => handleBlogClick(blog.link)}
                key={blog.id} 
                title={blog.title} 
                date={blog.date} 
                previewText={blog.previewText} 
              />
            ))}
          </div>
          <div className="text-center mt-12">
              <Button
                  type='link'
                  onClick={() => window.open('https://medium.com/@jonathanshamwana', '_blank')} 
                  className="text-purple-800 text-lg read-more-button"
              >
                  Read More
              </Button>
          </div>
        </div>
      </section>
    );
};
  
export default Blog;