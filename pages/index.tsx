import { FeaturedPosts, Intro } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Head from "next/head";
import { IPost } from "../services/types";
import React from "react";

interface AllPosts {
  posts: {
    node: IPost;
  }[];
}

interface SinglePost extends IPost {
  value: {
    node: IPost;
  };
}

const Home: React.FC<AllPosts> = ({ posts }) => {
  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-8">
      <Intro />
      <FeaturedPosts />
      <Head>
        <title>Home | Cubicle</title>
        <meta
          name="description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta
          name="keywords"
          content="cubicle, programming, coding, life, web development, coder, programmer, new skills, latest, technology, computer, science, nerdy, nerd"
        />

        <meta name="og:title" content="Home | Cubicle" />
        <meta name="og:url" content="https://cubicle.vercel.app/" />
        <meta
          name="og:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />

        <meta name="twitter:title" content="Home | Cubicle" />
        <meta
          name="twitter:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />

        <link rel="apple-touch-icon" href="/fav.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
        <meta name="image" content="https://cubicle.vercel.app/fav.png" />
        <meta name="og:image" content="https://cubicle.vercel.app/fav.png" />
        <meta
          name="twitter:image"
          content="https://cubicle.vercel.app/fav.png"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-1">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {posts.map((post: SinglePost, index: number) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Fetch data at build time and revalidate after atmost 20s
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 20,
  };
}
