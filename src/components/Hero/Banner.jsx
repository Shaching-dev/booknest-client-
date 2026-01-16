import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12 py-12 px-4">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 animate-bounce">
            Welcome to BookNest
          </h1>
          <p className="text-lg text-secondary md:text-xl text-neutral mb-6">
            Discover, share, and review your favorite books with our community.
          </p>
          <button className="btn btn-primary btn-lg">Explore Books</button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="Books Illustration"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
