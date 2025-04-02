// components/BlogSection.jsx
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Medical Network Directory For Physicians & Clients",
      image: "/images/medical-team.jpg",
      category: "Tips for Maintaining a Healthy Heart",
      description: "Hypertension, commonly known as high blood",
      link: "#",
    },
    {
      id: 2,
      title: "The Importance of Regular Health Checkups",
      image: "/images/health-checkup.jpg",
      category: "Tips for Maintaining a Healthy Heart",
      description: "Hypertension, commonly known as high blood",
      link: "#",
    },
    {
      id: 3,
      title: "Managing Better Stress for Better Mental Health",
      image: "/images/mental-health.jpg",
      category: "Tips for Maintaining a Healthy Heart",
      description: "Hypertension, commonly known as high blood",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <h4 className="text-coral-500 font-medium uppercase tracking-wide mb-2">
          OUR BLOG
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900">
          Lates News & Articles.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-bold text-teal-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{post.category}</p>
              <p className="text-gray-500 mb-4">{post.description}...</p>
              <Link
                href={post.link}
                className="text-coral-500 hover:text-coral-600 inline-flex items-center"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
