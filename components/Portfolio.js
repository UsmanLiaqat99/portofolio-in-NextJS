import React from "react";

const Portfolio = () => {
  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="text-5xl font-bold text-center uppercase pt-20">
        My <span className="text-yellow-400">Portfolio</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pb-28">
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-48 md:h-56 rounded-xl"
            style={{
              background: `url('https://repository-images.githubusercontent.com/391662142/1108bdb8-90fa-4ecc-872d-a13eddbf6224') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/technology/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/science/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/sci/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/tech/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/edu/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/project/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/web/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/crypto/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
