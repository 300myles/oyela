"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { generateImage } from "../../../utils/generatImage";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

const initialBlogPosts: Omit<BlogPost, "image">[] = [
  {
    id: 1,
    title: "How to Manage Emotions",
    excerpt:
      "Discover effective ways to control your emotions and stay positive.",
  },
  {
    id: 2,
    title: "Building Healthy Relationships",
    excerpt: "Tips for creating meaningful connections with others.",
  },
  {
    id: 3,
    title: "AI in Counseling",
    excerpt: "Explore how AI can support mental health and counseling.",
  },
];

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const postsWithImages = await Promise.all(
        initialBlogPosts.map(async (post) => {
          const image = await generateImage(post.title);
          return { ...post, image: image || "/images/default-image.jpg" }; // Fallback image if none is generated
        })
      );
      setBlogPosts(postsWithImages);
    };

    fetchImages();
  }, []);

  return (
    <section className="bg-white pt-[8rem] md:py-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
          Our Latest Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blogs/${post.id}`}>
                  <span className="text-primary font-semibold hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
