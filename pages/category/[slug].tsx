import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";
import { IPost } from "../../services/types";

interface AllPosts {
  posts: {
    node: IPost;
  }[];
}

const CategoryPost = ({
  posts,
  category,
}: {
  posts: any;
  category: string;
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  const keywords: string[] | undefined = category.split(" ");
  keywords.push(router.query.slug as string);
  const result = keywords.filter((word) => word.length > 3);

  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-8">
      <Head>
        <title>{category} | Cubicle</title>
        <meta
          name="description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="keywords" content={result.join(", ")} />

        <meta name="og:title" content={category + " | Cubicle"} />
        <meta
          name="og:url"
          content={"https://cubicle.vercel.app/category/" + router.query.slug}
        />
        <meta
          name="og:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />

        <meta name="twitter:title" content={category + " | Cubicle"} />
        <meta
          name="twitter:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="image" content="https://cubicle.vercel.app/fav.png" />
        <meta name="og:image" content="https://cubicle.vercel.app/fav.png" />
        <meta
          name="twitter:image"
          content="https://cubicle.vercel.app/fav.png"
        />
      </Head>
      <h1 className="mb-8 font-bold text-3xl text-center pb-4 border-b border-cyan-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        Category : &nbsp; {category}{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {posts.map((post: any, index: number) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
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

interface ParamProps {
  params: { slug: string };
}

export async function getStaticProps({ params }: ParamProps) {
  const posts = await getCategoryPost(params.slug);
  const category = posts[0].node.categories[0].name;
  return {
    props: { posts, category },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
