// app/blogs/[id]/page.tsx
import React from "react";
import { generateImage } from "../../../../utils/generatImage";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const getBlogPost = async (id: string): Promise<BlogPost> => {
  // Mock data fetching based on id
  const posts = [
    {
      id: 1,
      title: "How to Manage Emotions",
      content: "Here goes the full content of the blog post...",
      image: "",
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      content: "Here goes the full content of the blog post...",
      image: "",
    },
    {
      id: 3,
      title: "AI in Counseling",
      content: "Here goes the full content of the blog post...",
      image: "",
    },
  ];

  const post = posts.find((post) => post.id === parseInt(id));
  if (post) {
    // Generate image if not already present
    post.image = await generateImage(post.title) || "/images/default.jpg";
  }

  return post!;
};

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getBlogPost(params.id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="bg-white pt-[8rem] md:py-14">
      <div className="container mx-auto">
        <h1 className="text-xl md:text-4xl font-bold text-darkBlue text-center mb-6">
          {post.title}
        </h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-[100%] md:w-[400px] md:h-[400px] border object-cover rounded-xl mb-8"
        />
        <div className="text-sm md:text-lg text-gray-700 leading-relaxed">{post.content}</div>
      </div>
    </section>
  );
};

export default BlogPostPage;
