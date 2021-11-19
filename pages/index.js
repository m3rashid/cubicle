import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-8">
      <FeaturedPosts />
      <Head>
        <title>Home | Cubicle</title>
        <meta name="description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />
        <meta name="keywords" content="programming, coding, life, web development, coder, programmer, new skills, latest, technology, computer, science, nerdy, nerd" />

        <meta name="og:title" content="Home | Cubicle" />
        <meta name="og:url" content="https://cubicle.vercel.app/" />
        <meta name="og:description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />

        <meta name="twitter:title" content="Home | Cubicle" />
        <meta name="twitter:description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />

        <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="image" content="https://cubicle.vercel.app/favicon.ico" />
        <meta name="og:image" content="https://cubicle.vercel.app/favicon.ico" />
        <meta name="twitter:image" content="https://cubicle.vercel.app/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts: posts, revalidate: 20 },
  };
}

