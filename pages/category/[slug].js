import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-8">
      <Head>
        <title>{router.query.slug} Category | Cubicle</title>
        <meta name="description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />
        <meta name="keywords" content="programming, coding, life, web development, coder, programmer, new skills, latest, technology, computer, science, nerdy, nerd" />

        <meta name="og:title" content={router.query.slug + ' Category | Cubicle'} />
        <meta name="og:url" content={"https://cubicle.vercel.app/category/" + router.query.slug} />
        <meta name="og:description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />

        <meta name="twitter:title" content={router.query.slug + ' Category | Cubicle'} />
        <meta name="twitter:description" content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials" />

        <meta name="image" content="https://cubicle.vercel.app/favicon.ico" />
        <meta name="og:image" content="https://cubicle.vercel.app/favicon.ico" />
        <meta name="twitter:image" content="https://cubicle.vercel.app/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts: posts, revalidate: 20 },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
