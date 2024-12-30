export default function Blog() {
    const bloginfo = [
      {
        title: "Code Catalyst",
        slug: "Code-Catalyst",
        image: "/code.jpg",
        description: "",
      },
      {
        title: "Digital Horizons",
        slug: "Digital-Horizons",
        image: "/digital.jpg",
        description:
          "",
      },
      {
        title: "Next Byte",
        slug: "Next-Byte",
        image: "/next.jpg",
        description:
          ".",
      },
      {
        title: "Mind Mosaic",
        slug: "Mind-Mosaic",
        image: "/mind.png",
        description:
          "A blog dedicated to piecing together diverse ideas, inspiration, and reflections that fuel personal growth and creative thinking.",
      },
      {
        title: "Pathfinders",
        slug: "Path-finders",
        image: "/club.jpg",
        description:
          "Discover stories, strategies, and insights to help you navigate the challenges and opportunities of life's journey.",
      },
      {
        title: "Curiosity Compass",
        slug: "Curiosity-Compass",
        image: "/compass.jpg",
        description:
          "A guide to uncovering intriguing discoveries and unraveling fascinating topics across diverse fields. Ignite your curiosity and broaden your understanding of the world. Follow your inner compass to explore the unknown.",
      },
    ];
  return (
      <div
        className="min-h-screen bg-cover bg-center text-white relative "
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="Curiosity-Compass mx-auto p-6 pt-10 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-shadow-md text-black">
            Latest Blogs
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bloginfo.map((bloginfo) => (
              <a
                key={bloginfo.slug}
                href={`/blog/${bloginfo.slug}`}
                className="group block bg-white overflow-hidden shadow-xl  hover:scale-105 transition duration-300 "
              >
                <div
                  className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300 bg-cover "
                  style={{ backgroundImage: `url(${bloginfo.image})`   }}
                ></div>
                <div className="p-4 text-gray-800">
                  <h3 className="text-xl font-bold group-hover:text-yellow-800">
                    {bloginfo.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{bloginfo.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
  );
}