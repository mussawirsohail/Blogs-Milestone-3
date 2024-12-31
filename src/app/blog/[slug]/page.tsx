"use client";
import { useState } from "react";
type BlogProps = {
  params: { slug:string };
};
const blogData: Record<string, { title: string; content: string }> = {
  "Code-Catalyst": {
    title: "Code-Catalyst",
    content: "Your go-to destination for coding tips, tutorials, and innovation. Discover how to harness the power of programming to build smarter solutions and bring ideas to life. Elevate your coding journey with expert insights and cutting-edge trends",
  },
  "Digital-Horizons": {
    title: "Digital-Horizons",
    content: "Explore the ever-expanding world of technology and its impact on our lives. From AI breakthroughs to digital transformation, this blog delves into the trends shaping our digital future. Stay informed and inspired as we navigate new tech frontiers",
  },
  "Next-Byte": {
    title: "Next-Byte",
    content:"Bite-sized updates and insights into the latest in technology, development, and innovation. Perfect for tech enthusiasts seeking quick yet impactful knowledge. Stay ahead with your daily dose of digital news and trends.",
  },
  "Mind-Mosaic": {
    title: "Mind-Mosaic",
    content: "An inspirational space where ideas, reflections, and creativity come together. Dive into thought-provoking stories that inspire growth, curiosity, and a fresh perspective on life. Piece by piece, build a better mindset.",
  },
  "Path-finders": {
    title: "Path-finders",
    content: "Uncover strategies and stories for navigating lifes twists and turns with confidence. Whether its personal growth or professional development, this blog offers guidance to help you find your way. Lets explore the path to success together.",
  },
  "Curiosity-Compass": {
    title: "Curiosity-Compass",
    content: "A guide to uncovering intriguing discoveries and unraveling fascinating topics across diverse fields. Ignite your curiosity and broaden your understanding of the world. Follow your inner compass to explore the unknown.",
  },
};
// export default function BlogPost({ params }: BlogProps) {
//   const {slug} = params;
//   const blogsection = blogData[slug];

//   const [comments, setComments] = useState<string[]>([]);
//   const [newComment, setNewComment] = useState<string>("");

//   const handleAddComment = () => {
//     if (newComment.trim() !== "") {
//       setComments([...comments, newComment]);
//       setNewComment("");
//     }
//   };
export default function BlogPost({ params }: BlogProps) {
  const { slug } = params;
  const blogsection = blogData[slug];

  // State for comments

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex justify-start items-center px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/images/think.jpg')",
      }}
    >
      <div className="max-w-3xl w-full bg-yellow-600/60 sm:p-12 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">{blogsection.title}</h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">{blogsection.content}</p>
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comments</h2>
          <div className="mb-4">
            {comments.length === 0 ? (
              <p className="text-gray-200">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-300 py-2 text-gray-200"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="text-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full sm:w-auto"
            />
            <button
              onClick={handleAddComment}
              className="mt-4 sm:mt-0 px-4 py-2 bg-white text-yellow-600 rounded-lg hover:bg-gray-100"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
