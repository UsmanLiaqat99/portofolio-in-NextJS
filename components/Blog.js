import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="text-5xl font-bold text-center uppercase pt-20">
        My <span className="text-yellow-400">Blog</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pb-28">
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/technology/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/science/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/website/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/coding/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/crypto/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
        <div className="blog_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url('https://picsum.photos/seed/bitcoin/900/600') center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              How to make website based on blockchain
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam in
              doloribus enim ut. Possimus eligendi odio ea eum ullam dicta...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
