import React from "react";
import post1 from "@/images/post-1.jpg";
import post2 from "@/images/post-2.jpg";
import post3 from "@/images/post-3.jpg";
import Image from "next/image";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Medical Network Directory For Physicians & Clients",
      image: post1,
      topic: "Tips for Maintaining a Healthy Heart",
      subtitle: "Hypertension, commonly known as high blood",
    },
    {
      id: 2,
      title: "The Importance of Regular Health Checkups",
      image: post2,
      topic: "Tips for Maintaining a Healthy Heart",
      subtitle: "Hypertension, commonly known as high blood",
    },
    {
      id: 3,
      title: "Managing Better Stress for Better Mental Health",
      image: post3,
      topic: "Tips for Maintaining a Healthy Heart",
      subtitle: "Hypertension, commonly known as high blood",
    },
  ];

  return (
    <div className="max-w-full bg-[#FDF5F2] mx-auto px-3 md:px-12 md:pb-25 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-[#F2AA8A] md:text-xl uppercase tracking-wide">
            OUR BLOG
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#0A3635] mt-2">
            Latest News & Articles.
          </h2>
        </div>
        <div className="hidden md:block">
          <div className="w-4 h-4 rounded-full bg-coral-400"></div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-bold text-[#0A3635] mb-5">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-1">{post.topic}</p>
              <p className="text-gray-600 mb-4">{post.subtitle}</p>
              <a
                href="#"
                className="text-[#F2AA8A] flex items-center hover:underline"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
